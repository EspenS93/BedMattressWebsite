using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BedMatressWebsite.Models
{
    public class Bed
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string Series { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public string Fabric { get; set; }
        public int Price { get; set; }
    }
}
