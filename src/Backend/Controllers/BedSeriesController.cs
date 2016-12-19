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
    public class BedSeriesController : Controller
    {
        public BedSeriesController(WebsiteDbContext context)
        {
            BedMatressDB = context;
        }

        public WebsiteDbContext BedMatressDB;

        // GET: api/BedSeries
        [HttpGet]
        public IEnumerable<Bed_series> Get()
        {
            return BedMatressDB.Set<Bed_series>();
        }

        // GET api/BedSeries/5
        [HttpGet("{id}", Name = "GetBedSeries")]
        public IActionResult Get(int id)
        {
            var bedSeries = BedMatressDB.Bed_series.Find(id);
            if (bedSeries == null)
            {
                return NotFound();
            }
            return new ObjectResult(bedSeries);
        }

        // POST api/BedSeries
        [HttpPost]
        public IActionResult Post([FromBody]Bed_series bedSeries)
        {
            if (bedSeries == null)
            {
                return BadRequest();
            }
            BedMatressDB.Bed_series.Add(bedSeries);
            BedMatressDB.SaveChanges();
            return CreatedAtRoute("GetBedSeries", new { id = bedSeries.ID }, bedSeries);
        }

        // PUT api/BedSeries/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Bed_series newBedSeries)
        {
            if (newBedSeries == null || newBedSeries.ID != id)
            {
                return BadRequest();
            }

            var bedSeries = BedMatressDB.Set<Bed_series>().Where(t => id == t.ID);
            if (bedSeries == null)
            {
                return NotFound();
            }

            BedMatressDB.Bed_series.Update(newBedSeries);
            BedMatressDB.SaveChanges();
            return new NoContentResult();
        }

        // DELETE api/BedSeries/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var bedSeries = BedMatressDB.Set<Bed_series>().Find(id);
            if (bedSeries == null)
            {
                return NotFound();
            }
            else
            {
                BedMatressDB.Bed_series.Remove(bedSeries);
                BedMatressDB.SaveChanges();
                return new NoContentResult();
            }
        }
    }
}
