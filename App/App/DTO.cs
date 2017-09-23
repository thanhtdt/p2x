﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    class DTO<T>
    {
        public int Code { get; set; }
        public T Data { get; set; }

        public string Errors { get; set; }
    }
}
