using BookRentalObjects;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookRentalAPI.Controllers
{
    [ApiController]
    [Route("[controller]/[Action]")]
    public class UserOperationsController: Controller
    {
        
        
        public string GetActualUser()
        {
            if(this.User?.Identity?.IsAuthenticated != true)
            {
                return "Sample user";
            }
            return this.User.Identity.Name;
        }
        [HttpPost("{id}")]
        public bool RentBook(int id)
        {
            var rb = new RentBooks();
            return rb.RentBook(GetActualUser(), id);
            
        }
        [HttpPost("{id}")]
        public bool UnRentBookCurrentUser(int id)
        {
            var rb = new RentBooks();
            return rb.UnRentBook(GetActualUser(), id);

        }
        [HttpPost("{uid}/{id}")]
        public bool UnRentBook(string uid,int id)
        {
            var rb = new RentBooks();
            return rb.UnRentBook(uid, id);

        }
        [HttpGet()]
        public RentedBook[] RentedBooks()
        {
            var rb = new RentBooks();
            return rb.UserBooks(GetActualUser());
        }
        [HttpGet("{id}")]
        public bool IsBookRented(int id)
        {
            var rb = new RentBooks();
            return rb.IsBookRented(GetActualUser(), id);
        }

    }
}
