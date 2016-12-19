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
        public IEnumerable<Bed> Get()
        {
            return BedMatressDB.Set<Bed>();
        }

        // GET api/Bed/5
        [HttpGet("{id}", Name = "GetBed")]
        public IActionResult Get(int id)
        {
            var bed = BedMatressDB.Beds.Find(id);
            if (bed == null)
            {
                return NotFound();
            }
            return new ObjectResult(bed);
        }

        // POST api/Bed
        [HttpPost]
        public IActionResult Post([FromBody]Bed bed)
        {
            if (bed == null)
            {
                return BadRequest();
            }
            BedMatressDB.Beds.Add(bed);
            BedMatressDB.SaveChanges();
            return CreatedAtRoute("GetBed", new { id = bed.ID }, bed);
        }

        // PUT api/Bed/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Bed newBed)
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

        // DELETE api/Bed/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
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
