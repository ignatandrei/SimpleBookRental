using System;
using System.Collections.Generic;
using System.Linq;
//using System.Drawing;
//using System.Drawing.Imaging;

namespace BookRentalObjects
{
    public class RentedBook
    {
        public Book Book { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
    }
    public class RentBooks
    {
        static Dictionary<string, List<RentedBook>> books = new Dictionary<string, List<RentedBook>>();
        public bool RentBook(string userName,int bookId)
        {
            //TODO: Concurrency
            if (books.Values.SelectMany(it => it).Select(it => it.Book.ID).Contains(bookId))
                return false;
            if (!books.ContainsKey(userName))
                books.Add(userName, new List<RentedBook>());
            
            var lb = new LoadBooks();
            var b = lb.Books().FirstOrDefault(it => it.ID == bookId);
            if (b == null)
                return false;
            var rb = new RentedBook();
            rb.Book = b;
            rb.FromDate = DateTime.UtcNow;
            rb.ToDate = rb.FromDate.AddDays(14);//TODO: config
            books[userName].Add(rb);
            return true;
        }

        public bool UnRentBook(string userName, int bookId)
        {
            if (!books.ContainsKey(userName))
                return false;

            var b = books[userName].FirstOrDefault(it => it.Book.ID == bookId);

            if(b==null)
                return false;
            books[userName].Remove(b);
            return true;
        }

        public RentedBook[] UserBooks(string userName)
        {
            if (!books.ContainsKey(userName))
                books.Add(userName, new List<RentedBook>());

            return books[userName].ToArray();
        }

    }
}
