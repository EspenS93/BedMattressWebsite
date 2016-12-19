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
    public class BedTypeController : Controller
    {
        public BedTypeController(WebsiteDbContext context)
        {
            BedMatressDB = context;
        }

        public WebsiteDbContext BedMatressDB;

        // GET: api/BedType
        [HttpGet]
        public IEnumerable<Bed_type> Get()
        {
            return BedMatressDB.Set<Bed_type>();
        }

        // GET api/BedType/5
        [HttpGet("{id}", Name = "GetBedType")]
        public IActionResult Get(int id)
        {
            var bedType = BedMatressDB.Bed_types.Find(id);
            if (bedType == null)
            {
                return NotFound();
            }
            return new ObjectResult(bedType);
        }

        // POST api/BedType
        [HttpPost]
        public IActionResult Post([FromBody]Bed_type bedType)
        {
            if (bedType == null)
            {
                return BadRequest();
            }
            BedMatressDB.Bed_types.Add(bedType);
            BedMatressDB.SaveChanges();
            return CreatedAtRoute("GetBedType", new { id = bedType.ID }, bedType);
        }

        // PUT api/BedType/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Bed_type newBedType)
        {
            if (newBedType == null || newBedType.ID != id)
            {
                return BadRequest();
            }

            var bedType = BedMatressDB.Set<Bed_type>().Where(t => id == t.ID);
            if (bedType == null)
            {
                return NotFound();
            }

            BedMatressDB.Bed_types.Update(newBedType);
            BedMatressDB.SaveChanges();
            return new NoContentResult();
        }

        // DELETE api/BedType/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var bedType = BedMatressDB.Set<Bed_type>().Find(id);
            if (bedType == null)
            {
                return NotFound();
            }
            else
            {
                BedMatressDB.Bed_types.Remove(bedType);
                BedMatressDB.SaveChanges();
                return new NoContentResult();
            }
        }
    }
}
