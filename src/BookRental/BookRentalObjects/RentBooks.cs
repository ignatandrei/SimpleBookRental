using System;
using System.Collections.Generic;
using System.Linq;
//using System.Drawing;
//using System.Drawing.Imaging;

namespace BookRentalObjects
{
    public class RentBooks
    {
        static Dictionary<string, List<RentedBook>> books = new Dictionary<string, List<RentedBook>>();
        
        public RentedBooks[] AllBooksRented()
        {
            return books
                .Select(it => new RentedBooks() { UserName = it.Key, BooksRented = it.Value.ToArray() })
                .ToArray();
            
        }
        public bool RentBook(string userName,int bookId)
        {
            var lb = new LoadBooks();
            var b = lb.Books().FirstOrDefault(it => it.ID == bookId);
            if (b == null)
                return false;

            var nrBooks = b.TotalNumber;
            //TODO: Concurrency
            if (books
                .Values
                .SelectMany(it => it)
                .Select(it => it.Book.ID)
                .Count(it=>it == bookId)
                == nrBooks
                )
                return false;

            if (!books.ContainsKey(userName))
                books.Add(userName, new List<RentedBook>());
            
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

        public bool IsBookRented(string userName, int id)
        {
            var b = UserBooks(userName);
            return b?.Count(it=>it.Book.ID ==id)>0;
        }

        public RentedBook[] UserBooks(string userName)
        {
            if (!books.ContainsKey(userName))
                books.Add(userName, new List<RentedBook>());

            return books[userName].ToArray();
        }

    }
}
