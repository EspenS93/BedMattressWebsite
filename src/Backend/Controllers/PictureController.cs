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
    public class PictureController : Controller
    {
        public PictureController(WebsiteDbContext context)
        {
            BedMatressDB = context;
        }

        public WebsiteDbContext BedMatressDB;

        // GET: api/Picture/id
        [HttpGet("{id}", Name = "GetPictures")]
        public IEnumerable<Picture> GetPictures(string id)
        {
            return BedMatressDB.Set<Picture>().Where(p => p.BedID == id);
        }

        // POST: api/picture
        [HttpPost]
        public IActionResult PostPictures([FromBody]Picture[] pictures)
        {
            if (pictures == null)
            {
                return BadRequest();
            }
            for (int i = 0; i < pictures.Length; i++)
            {
                BedMatressDB.Pictures.Add(pictures[i]);
            }
            BedMatressDB.SaveChanges();
            return Ok();
        }

        // PUT: api/picture/id
        [HttpPut("{id}")]
        public IActionResult PutPicture(string id, [FromBody]Picture newPicture)
        {
            if (newPicture == null || newPicture.ID != id)
            {
                return BadRequest();
            }

            var picture = BedMatressDB.Set<Picture>().Where(t => id == t.ID);
            if (picture == null)
            {
                return NotFound();
            }

            BedMatressDB.Pictures.Update(newPicture);
            BedMatressDB.SaveChanges();
            return new NoContentResult();
        }

        // DELETE: api/picture/id
        [HttpDelete("{id}")]
        public IActionResult DeleteBedPicture(string id)
        {
            var picture = BedMatressDB.Set<Picture>().Find(id);
            if (picture == null)
            {
                return NotFound();
            }
            else
            {
                BedMatressDB.Pictures.Remove(picture);
                BedMatressDB.SaveChanges();
                return new NoContentResult();
            }
        }
    }
}
