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
    public class BedFabricController : Controller
    {
        public BedFabricController(WebsiteDbContext context)
        {
            BedMatressDB = context;
        }

        public WebsiteDbContext BedMatressDB;

        // GET: api/BedFabric
        [HttpGet]
        public IEnumerable<Bed_fabric> Get()
        {
            return BedMatressDB.Set<Bed_fabric>();
        }

        // GET api/BedFabric/5
        [HttpGet("{id}", Name = "GetBedFabrics")]
        public IActionResult Get(int id)
        {
            var bedFabric = BedMatressDB.Bed_fabrics.Find(id);
            if (bedFabric == null)
            {
                return NotFound();
            }
            return new ObjectResult(bedFabric);
        }

        // POST api/BedFabric
        [HttpPost]
        public IActionResult Post([FromBody]Bed_fabric bedFabric)
        {
            if (bedFabric == null)
            {
                return BadRequest();
            }
            BedMatressDB.Bed_fabrics.Add(bedFabric);
            BedMatressDB.SaveChanges();
            return CreatedAtRoute("GetBedFabric", new { id = bedFabric.ID }, bedFabric);
        }

        // PUT api/BedFabric/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Bed_fabric newBedFabric)
        {
            if (newBedFabric == null || newBedFabric.ID != id)
            {
                return BadRequest();
            }

            var bedFabric = BedMatressDB.Set<Bed_fabric>().Where(t => id == t.ID);
            if (bedFabric == null)
            {
                return NotFound();
            }

            BedMatressDB.Bed_fabrics.Update(newBedFabric);
            BedMatressDB.SaveChanges();
            return new NoContentResult();
        }

        // DELETE api/BedFabric/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var bedFabric = BedMatressDB.Set<Bed_fabric>().Find(id);
            if (bedFabric == null)
            {
                return NotFound();
            }
            else
            {
                BedMatressDB.Bed_fabrics.Remove(bedFabric);
                BedMatressDB.SaveChanges();
                return new NoContentResult();
            }
        }
    }
}
