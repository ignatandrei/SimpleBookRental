using System;

namespace BookRentalObjects
{
    public class Book
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Author[] Authors { get; set; }
    }
}
