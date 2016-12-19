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
    public class BedSizeController : Controller
    {
        public BedSizeController(WebsiteDbContext context)
        {
            BedMatressDB = context;
        }
        public WebsiteDbContext BedMatressDB;

        // GET: api/BedSize
        [HttpGet]
        public IEnumerable<Bed_size> Get()
        {
            return BedMatressDB.Set<Bed_size>();
        }

        // GET api/BedSize/5
        [HttpGet("{id}", Name = "GetBedSize")]
        public IActionResult Get(int id)
        {
            var bedSize = BedMatressDB.Bed_sizes.Find(id);
            if (bedSize == null)
            {
                return NotFound();
            }
            return new ObjectResult(bedSize);
        }

        // POST api/BedSize
        [HttpPost]
        public IActionResult Post([FromBody]Bed_size bedSize)
        {
            if (bedSize == null)
            {
                return BadRequest();
            }
            BedMatressDB.Bed_sizes.Add(bedSize);
            BedMatressDB.SaveChanges();
            return CreatedAtRoute("GetBedSize", new { id = bedSize.ID }, bedSize);
        }

        // PUT api/BedSize/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Bed_size newBedSize)
        {
            if (newBedSize == null || newBedSize.ID != id)
            {
                return BadRequest();
            }

            var bedSize = BedMatressDB.Set<Bed_size>().Where(t => id == t.ID);
            if (bedSize == null)
            {
                return NotFound();
            }

            BedMatressDB.Bed_sizes.Update(newBedSize);
            BedMatressDB.SaveChanges();
            return new NoContentResult();
        }

        // DELETE api/BedSize/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var bedSize = BedMatressDB.Set<Bed_size>().Find(id);
            if (bedSize == null)
            {
                return NotFound();
            }
            else
            {
                BedMatressDB.Bed_sizes.Remove(bedSize);
                BedMatressDB.SaveChanges();
                return new NoContentResult();
            }
        }
    }
}
