﻿using System;
using System.IO;
using Hld;
using MainBoardLib;
using RJCP.IO.Ports;

namespace ConsoleApp
{
    class Program
    {
        static HldMainBoard _mainBoard;
        static HldMainBoard mainBoard = _mainBoard = _mainBoard ?? new HldMainBoard();

        static void Main(string[] args)
        {
            Console.WriteLine("Welcome");
            if (File.Exists("config.txt"))
            {

            }
            else
            {
                Console.WriteLine("Config file doesn't exist ");
            }
            var serialports = SerialPortStream.GetPortNames();
            if (serialports.Length < 1)
            {
                Console.WriteLine("There isn't any plugged serial port, Please plug board then restart app.");
                exitMessage();
                return;
            }
            string choosenPort = inputPort(serialports);
            string errMsg="";
            mainBoard.OpenSerialPort(choosenPort, 115200, ref errMsg);
            exitMessage();

        }

        static void displayAvailableSerialPorts(string[] ports)
        {
            Console.WriteLine("Current available serial ports:");
            for (int i = 0; i < ports.Length; i++)
            {
                Console.WriteLine("\t{0}. {1}", i + 1, ports[i]);
            }
        }

        static void exitMessage()
        {
            Console.WriteLine("Press any key to exit...");
            Console.ReadLine();
        }

        static string inputPort(string[] ports)
        {
            int portNumber;
            bool isParseSuccess;
            do
            {
                displayAvailableSerialPorts(ports);
                Console.Write("Select a port: ");
                isParseSuccess = int.TryParse(Console.ReadLine(), out portNumber);
            } while (!isParseSuccess || portNumber < 1 || portNumber > ports.Length);
            return ports[portNumber-1];
        }
    }
}
