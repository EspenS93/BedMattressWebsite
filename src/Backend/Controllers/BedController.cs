using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BedMatressWebsite.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace BedMatressWebsite.Controllers
{
    [Route("api/[controller]")]
    public class BedController : Controller
    {
        public BedController(WebsiteDbContext context)
        {
            BedMatressDB = context;
        }

        public WebsiteDbContext BedMatressDB;

        // GET: api/Bed
        [HttpGet]
        public IEnumerable<Bed> GetBeds()
        {
            return BedMatressDB.Set<Bed>();
        }

        // POST: api/Bed/filter
        [HttpPost("filter")]
        public IEnumerable<Bed> GetSpecificBeds([FromBody] Bed filter)
        {
            IQueryable<Bed> beds = BedMatressDB.Set<Bed>();
            if (filter.Color != "")
            {
                beds = beds.Where(b => b.Color == filter.Color);
            }
            if(filter.Fabric !="")
            {
                beds = beds.Where(b => b.Fabric == filter.Fabric);
            }
            if (filter.Type != "")
            {
                beds = beds.Where(b => b.Type == filter.Type);
            }
            if (filter.Size != "")
            {
                beds = beds.Where(b => b.Size == filter.Size);
            }
            if (filter.Series != "")
            {
                beds = beds.Where(b => b.Series == filter.Series);
            }
            return beds;
        }

        // GET: api/Bed/colors
        [HttpGet, Route("colors")]
        public IActionResult GetBedColors()
        {
            return new JsonResult(BedMatressDB.Beds.Select(b => b.Color).Distinct());
        }

        // GET: api/Bed/fabrics
        [HttpGet, Route("fabrics")]
        public IActionResult GetBedFabrics()
        {
            return new JsonResult(BedMatressDB.Beds.Select(b => b.Fabric).Distinct());
        }

        // GET: api/Bed/series
        [HttpGet, Route("series")]
        public IActionResult GetBedSeries()
        {
            return new JsonResult(BedMatressDB.Beds.Select(b => b.Series).Distinct());
        }

        // GET: api/Bed/sizes
        [HttpGet, Route("sizes")]
        public IActionResult GetBedSizes()
        {
            return new JsonResult(BedMatressDB.Beds.Select(b => b.Size).Distinct());
        }

        // GET: api/Bed/types
        [HttpGet, Route("types")]
        public IActionResult GetBedTypes()
        {
            return new JsonResult(BedMatressDB.Beds.Select(b => b.Type).Distinct());
        }

        // GET: api/Bed/id
        [HttpGet("{id}", Name = "GetBed")]
        public IActionResult GetBed(string id)
        {
            var bed = BedMatressDB.Set<Bed>().Find(id);
            if (bed == null)
            {
                return NotFound();
            }
            return new ObjectResult(bed);
        }

        // POST: api/Bed
        [HttpPost]
        public IActionResult PostBed([FromBody]Bed bed)
        {
            if (bed == null)
            {
                return BadRequest();
            }
            BedMatressDB.Beds.Add(bed);
            BedMatressDB.SaveChanges();
            return CreatedAtRoute("GetBed", new { id = bed.ID }, bed);
        }

        // PUT: api/Bed/id
        [HttpPut("{id}")]
        public IActionResult PutBed(string id, [FromBody]Bed newBed)
        {
            if (newBed == null || newBed.ID != id)
            {
                return BadRequest();
            }

            var bed = BedMatressDB.Set<Bed>().Where(t => id == t.ID);
            if (bed == null)
            {
                return NotFound();
            }

            BedMatressDB.Beds.Update(newBed);
            BedMatressDB.SaveChanges();
            return new NoContentResult();
        }

        // DELETE: api/Bed/5
        [HttpDelete("{id}")]
        public IActionResult DeleteBed(string id)
        {
            var bed = BedMatressDB.Set<Bed>().Find(id);
            if (bed == null)
            {
                return NotFound();
            }
            else
            {
                BedMatressDB.Beds.Remove(bed);
                BedMatressDB.SaveChanges();
                return new NoContentResult();
            }
        }
    }
}
