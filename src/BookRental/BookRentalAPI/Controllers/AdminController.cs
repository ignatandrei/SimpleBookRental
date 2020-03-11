using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookRentalObjects;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookRentalAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        public RentedBooks[] AllRentedBooks()
        {
            var rb = new RentBooks();
            return rb.AllBooksRented();
        }
    }
}