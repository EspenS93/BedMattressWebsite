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
    public class BedColorController : Controller
    {
        public BedColorController(WebsiteDbContext context)
        {
            BedMatressDB = context;
        }

        public WebsiteDbContext BedMatressDB;

        // GET: api/BedColor
        [HttpGet]
        public IEnumerable<Bed_color> Get()
        {
            return BedMatressDB.Set<Bed_color>();
        }

        // GET api/BedColor/5
        [HttpGet("{id}", Name = "GetBed_color")]
        public IActionResult Get(int id)
        {
            var bed_color = BedMatressDB.Bed_colors.Find(id);
            if (bed_color == null)
            {
                return NotFound();
            }
            return new ObjectResult(bed_color);
        }

        // POST api/BedColor
        [HttpPost]
        public IActionResult Post([FromBody]Bed_color bed_color)
        {
            if (bed_color == null)
            {
                return BadRequest();
            }
            BedMatressDB.Bed_colors.Add(bed_color);
            BedMatressDB.SaveChanges();
            return CreatedAtRoute("GetBed_color", new { id = bed_color.ID }, bed_color);
        }

        // PUT api/BedColor/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Bed_color newBed_color)
        {
            if (newBed_color == null || newBed_color.ID != id)
            {
                return BadRequest();
            }

            var bed_color = BedMatressDB.Set<Bed_color>().Where(t => id == t.ID);
            if (bed_color == null)
            {
                return NotFound();
            }

            BedMatressDB.Bed_colors.Update(newBed_color);
            BedMatressDB.SaveChanges();
            return new NoContentResult();
        }

        // DELETE api/BedColor/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var bed_color = BedMatressDB.Set<Bed_color>().Find(id);
            if (bed_color == null)
            {
                return NotFound();
            }
            else
            {
                BedMatressDB.Bed_colors.Remove(bed_color);
                BedMatressDB.SaveChanges();
                return new NoContentResult();
            }
        }
    }
}
