using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Parcial1.DAL;

namespace Parcial1.Migrations
{
    [DbContext(typeof(DBContext))]
    [Migration("20170616002153_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Parcial1.Models.Cliente", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Nombre");

                    b.HasKey("Id");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("Parcial1.Models.Telefono", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ClienteId");

                    b.Property<string>("Descripcion");

                    b.Property<int>("Tipo");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

                    b.ToTable("Telefonos");
                });

            modelBuilder.Entity("Parcial1.Models.Telefono", b =>
                {
                    b.HasOne("Parcial1.Models.Cliente", "Cliente")
                        .WithMany("Telefonos")
                        .HasForeignKey("ClienteId");
                });
        }
    }
}
