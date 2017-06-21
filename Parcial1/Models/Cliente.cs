using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parcial1.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public virtual ICollection<Telefono> Telefonos { get; set; }

        public Cliente()
        {
            Telefonos = new List<Telefono>(); 
        }
    }
}
