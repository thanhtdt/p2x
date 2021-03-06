﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Quobject.SocketIoClientDotNet.Client;
using Newtonsoft.Json;
using RestSharp;
using App.DTO;

namespace App
{
    class App
    {
        const int ERROR_DELAY = 3000;
        const int LOOP_DELAY = 500;
        const int BAUD_RATE = 115200;
        const int POWER_STATUS_NORMAL = 0;
        const int POWER_STATUS_DOWN = 1;
        const int POWER_STATUS_FAIL = -1;
        const string LOG_ERROR_PREFIX = "[Error]";
        const int TIME_OUT = 5000;
        const string EVENT_OPEN = "Open Lock";

        private readonly AppConfig _config;
        IHldMainBoard hldMainBoard;

        Queue<int> _commandsQueue;
        Queue<int> CommandsQueue => _commandsQueue = _commandsQueue ?? new Queue<int>();

        private int _nSafe;

        public int NSafe
        {
            get { return _nSafe; }
            set
            {
                if (value < 1 || value > 152)
                    throw new ArgumentException("Parameters is not valid");
                else
                    _nSafe = value;
            }
        }

        public bool IsSensor { get; set; }

        private RestClient _client;

        // context
        private string _ic = string.Empty;
        private string _jwt = string.Empty;
        string version = string.Empty;
        private Socket _socket;

        public App(AppConfig config, IHldMainBoard hldMainBoard)
        {
            _config = config;
            this.hldMainBoard = hldMainBoard;
            this.NSafe = config.NLocks;
            this.IsSensor = config.IsSensor;
            this.hldMainBoard.SetMaxSide(IsSensor ? 2 : 1);
            _client = new RestClient(_config.ServerUrl)
            {
                Timeout = TIME_OUT
            };

        }

        public async Task RunAsync()
        {
            while (true)
            {
                try
                {
                    await Loop();
                }
                catch (Exception ex)
                {
                    AppLog.Error(ex.ToString());
                }
                finally
                {
                    _ic = string.Empty;
                    _jwt = string.Empty;
                    version = string.Empty;
                    _socket?.Close();
                }
                AppLog.Info("Restarting...");
                await Task.Delay(ERROR_DELAY);
            }
        }

        public async Task Loop()
        {
            string errMsg = string.Empty;
            BoardStatus oldStatus = null, latestStatus;

            if (!TestBoard(_config.PortName, ref _ic, ref version, ref errMsg))
            {
                AppLog.Error("{0}. {1}", "Connect to board fail", errMsg);
                await Task.Delay(ERROR_DELAY);
                return;
            }
            PrintBoardInfo(_ic, version);

            AppLog.Info("Authenticating...");
            _jwt = await Login(_ic, _config.Secret);
            AppLog.Info("Authenticated");

            await Subscribe(_jwt);

            while (true)
            {
                latestStatus = ReadBoardStatus(ref errMsg);
                if (latestStatus is null || !string.IsNullOrEmpty(errMsg))
                {
                    AppLog.Error("{0}. {1}", "Can't read board's status", errMsg);
                    break;
                }

                if (latestStatus != oldStatus)
                {
                    Console.WriteLine("Previous status:");
                    Console.WriteLine(oldStatus);
                    Console.WriteLine("New status:");
                    Console.WriteLine(latestStatus);
                    SendStatus(latestStatus);
                    oldStatus = latestStatus;
                }

                if (IsCommandAvailable())
                {
                    lock (CommandsQueue)
                    {
                        var safe = CommandsQueue.Dequeue();
                        if (!ExecuteCommand(safe, ref errMsg))
                        {
                            AppLog.Error("{0}. {1}", "Execute command fail", errMsg);
                        }
                        else
                        {
                            AppLog.Info("Opened Safe:{0}", safe);
                        }

                    }
                }

                await Task.Delay(LOOP_DELAY);
            }
        }

        public async Task<string> Login(string iC, string secret)
        {
            var loginRequest = MakeLoginRequest(iC, secret);
            var response = (await _client.ExecuteTaskAsync<DTO<string>>(loginRequest)).Data;
            if (response is null)
            {
                // login unsuccess 
                throw new Exception("Can't get response from server");
            }
            else if (response.Code != 0)
            {
                throw new Exception(response.Errors);
            }
            return response.Data;
        }

        public async Task Subscribe(string jwt)
        {
            await Task.WhenAny(Task.Delay(TIME_OUT), Task.Run(async () =>
            {
                AppLog.Info("Connecting to server...");
                var options = new IO.Options();
                options.Query = new Dictionary<string, string>();
                options.Query["token"] = jwt;
                options.Reconnection = true;
                _socket = IO.Socket(_config.ServerUrl, options);
                _socket.On(Socket.EVENT_CONNECT, () =>
                {
                    AppLog.Info("Connected to server");
                });
                _socket.On(Socket.EVENT_RECONNECTING, () =>
                {
                    AppLog.Info("Reconnecting to server...");
                });
                _socket.On(EVENT_OPEN, (payload) =>
                {
                    int idNo = Convert.ToInt32(payload);
                    AppLog.Info("Received command open lock: {0}", idNo);
                    lock (CommandsQueue)
                    {
                        CommandsQueue.Enqueue(idNo);
                    }
                });

                // wait for connect to server
                while (_socket.Io().ReadyState != Manager.ReadyStateEnum.OPEN)
                {
                    await Task.Yield();
                }
            }));
            if (_socket.Io().ReadyState != Manager.ReadyStateEnum.OPEN)
            {
                throw new Exception("Open socket timeout.");
            }
        }

        public void SendStatus(BoardStatus boardStatus)
        {
            if (_socket.Io().ReadyState != Manager.ReadyStateEnum.OPEN)
            {
                throw new Exception("Socket isn't ready.");
            }
            _socket.Emit("status", JsonConvert.SerializeObject(boardStatus));
        }

        public bool TestBoard(string portName, ref string iC, ref string version, ref string errMsg)
        {
            try
            {
                errMsg = string.Empty;
                if (!hldMainBoard.OpenSerialPort(portName, BAUD_RATE, ref errMsg))
                {
                    return false;
                }
                var powerStatus = hldMainBoard.GetPowerStatus(ref errMsg);
                if (!string.IsNullOrEmpty(errMsg) || powerStatus == POWER_STATUS_FAIL)
                {
                    return false;
                }
                else if (powerStatus == POWER_STATUS_DOWN)
                {
                    errMsg = "MainBoard's power is down";
                    return false;
                }

                iC = hldMainBoard.GetICCardData();
                version = hldMainBoard.GetVersion(ref errMsg);
                if (!string.IsNullOrEmpty(errMsg))
                {
                    return false;
                }
                else if (string.IsNullOrEmpty(iC))
                {
                    errMsg = "IC No is empty";
                    return false;
                }
                return true;
            }
            catch (Exception ex)
            {
                errMsg = ex.ToString();
                return false;
            }
            finally
            {
                CloseSerialPort();
            }

        }

        public void PrintBoardInfo(string iC, string version)
        {
            AppLog.Info("IC No: {0}", iC);
            AppLog.Info("Board Version: {0}", version);
        }

        public BoardStatus ReadBoardStatus(ref string errMsg)
        {
            try
            {
                BoardStatus boardStatus = new BoardStatus();
                if (!hldMainBoard.OpenSerialPort(_config.PortName, BAUD_RATE, ref errMsg))
                {
                    return null;
                }

                boardStatus.PowerStatus = hldMainBoard.GetPowerStatus(ref errMsg);
                if (!string.IsNullOrEmpty(errMsg))
                {
                    return null;
                }
                else if (boardStatus.PowerStatus != 0)
                {
                    errMsg = "Power is down";
                    return null;
                }

                var list = GetAllSafeStatus(ref errMsg);
                if (!string.IsNullOrEmpty(errMsg))
                {
                    return null;
                }

                boardStatus.SafeStatuss = list;
                return boardStatus;
            }
            catch (Exception ex)
            {
                errMsg = ex.ToString();
                return null;
            }
            finally
            {
                CloseSerialPort();
            }
        }

        public void CloseSerialPort()
        {
            string errMsg = string.Empty;
            if (!hldMainBoard.CloseSerialPort(ref errMsg) || !string.IsNullOrEmpty(errMsg))
            {
                throw new Exception(string.Format("{0}. {1}", "Close serial port fail", errMsg));
            }
        }

        public List<SafeStatus> GetAllSafeStatus(ref string errMsg)
        {
            SafeStatusBuilder builder = new SafeStatusBuilder();
            List<SafeStatus> list = new List<SafeStatus>();
            var locks = hldMainBoard.GetLockAllStatus(0, ref errMsg);
            if (!string.IsNullOrEmpty(errMsg))
            {
                return null;
            }
            if (IsSensor)
            {
                var sensors = hldMainBoard.GetSensorAllStatus(1, ref errMsg);
                if (!string.IsNullOrEmpty(errMsg))
                {
                    return null;
                }
                list.AddRange(builder.BuildMany(NSafe, locks, sensors));
            }
            else
            {
                list.AddRange(builder.BuildMany(NSafe, locks));
            }
            return list;
        }

        public bool IsCommandAvailable()
        {
            return CommandsQueue.Count > 0;
        }

        public bool ExecuteCommand(int safeId, ref string msg)
        {
            try
            {
                if (!hldMainBoard.OpenSerialPort(_config.PortName, BAUD_RATE, ref msg))
                {
                    return false;
                }
                if (hldMainBoard.OpenLock(0, safeId, ref msg) < 0)
                {
                    return false;
                }
                return true;
            }
            catch (Exception ex)
            {
                msg = ex.ToString();
                return false;
            }
            finally
            {
                hldMainBoard.CloseSerialPort(ref msg);
            }
        }

        private RestRequest MakeRequest(BoardStatus status)
        {
            RestRequest restRequest = new RestRequest("status", Method.POST);
            restRequest.RequestFormat = DataFormat.Json;
            restRequest.AddBody(new DTO.Status(status, _ic));
            return restRequest;
        }

        private RestRequest MakeLoginRequest(string iC, string secret)
        {
            RestRequest restRequest = new RestRequest("api/login", Method.POST);
            restRequest.RequestFormat = DataFormat.Json;
            restRequest.AddBody(new
            {
                IC = iC,
                Secret = secret
            });
            return restRequest;
        }
    }
}
