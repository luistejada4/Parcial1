using Microsoft.EntityFrameworkCore;
using Parcial1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parcial1.DAL
{
    public class DBContext : DbContext
    {
        public DbSet<Telefono> Telefonos { get; set; }
        public DbSet<Cliente> Clientes { get; set; }

        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {
            
        }
    }
}
