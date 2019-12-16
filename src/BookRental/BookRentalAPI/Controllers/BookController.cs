using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookRentalObjects;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BookRentalAPI.Controllers
{
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
        public Book[] GetBooks()
        {
            var l = new LoadBooks();
            return l.Books();
        }
        [HttpGet]
        public Author[] GetAuthors()
        {
            var l = new LoadBooks();
            return l.Authors();
        }
    }
}
