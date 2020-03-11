using System;
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
}
