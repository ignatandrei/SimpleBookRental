using System;

namespace BookRentalObjects
{
    public class Book
    {
        public Book()
        {
            TotalNumber = 1;
        }
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Author[] Authors { get; set; }

        public int TotalNumber { get; set; }
    }
}
