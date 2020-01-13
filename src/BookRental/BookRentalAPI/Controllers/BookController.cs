using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookRentalObjects;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

namespace BookRentalAPI.Controllers
{
    public class Library
    {
        public Book[] Books { get; set; }
        public Author[] Authors { get; set; }
    }
    [ApiController]
    [Route("[controller]/[Action]")]
    public class BookController : ControllerBase
    {
        private readonly IMemoryCache _memoryCache;

        private readonly ILogger<BookController> _logger;

        public BookController(ILogger<BookController> logger, IMemoryCache memoryCache)
        {
            _logger = logger;
            _memoryCache = memoryCache;
        }

        [HttpGet]
        public Library GetBooks()
        {
            var l = new LoadBooks();
            return new Library()
            {
                Books = l.Books()
            }
            ;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetImage(int id)
        {
            try
            {
                var l = new LoadBooks();
                
                string name = nameof(GetImage) + id;
                if (!_memoryCache.TryGetValue(name, out byte[] img))
                {
                    img = l.GetImage(id);
                    _memoryCache.Set(name, img);
                }

                return File(img, "image/png");
            }
            catch(Exception ex)
            {
                return Content(ex.Message + " -- " + ex.StackTrace);
            }

        }
        [HttpGet]
        public Library GetAuthors()
        {
            var l = new LoadBooks();
            return new Library()
            {
                Authors = l.Authors()
            }
            ;
        }
    }
}
