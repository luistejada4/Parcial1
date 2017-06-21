using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parcial1.Models
{
    public class Telefono
    {
        public Cliente Cliente { get; set; }
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public int Tipo { get; set; }
    }
}
