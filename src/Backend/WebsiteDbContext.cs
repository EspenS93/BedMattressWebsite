using BedMatressWebsite.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BedMatressWebsite
{
    public class WebsiteDbContext : DbContext
    {
        public WebsiteDbContext(DbContextOptions<WebsiteDbContext> options)
    : base(options)
        { }

        public DbSet<Bed> Beds { get; set; }
        public DbSet<Bed_color> Bed_colors { get; set; }
        public DbSet<Bed_fabric> Bed_fabrics { get; set; }
        public DbSet<Bed_series> Bed_series { get; set; }
        public DbSet<Bed_size> Bed_sizes { get; set; }
        public DbSet<Bed_type> Bed_types { get; set; }

    }
}
