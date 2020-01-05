using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookRentalObjects;
using Microsoft.AspNetCore.Mvc;
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

        private readonly ILogger<BookController> _logger;

        public BookController(ILogger<BookController> logger)
        {
            _logger = logger;
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
