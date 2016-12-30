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
        public DbSet<Picture> Pictures { get; set; }


    }
}
