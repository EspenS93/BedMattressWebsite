using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BedMatressWebsite.Models
{
    public class Bed
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int TypeID { get; set; }
        public int SeriesID { get; set; }
        public int SizeID { get; set; }
        public int ColorID { get; set; }
        public int FabricID { get; set; }

    }
}
