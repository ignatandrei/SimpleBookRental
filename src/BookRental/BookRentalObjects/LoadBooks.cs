using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Text;

namespace BookRentalObjects
{
    public class LoadBooks
    {
        public byte[] GetImage(int bookId)
        {
            var book = Books().FirstOrDefault(it => it.ID == bookId);
            var name = book == null ? "Not found book" : $"this is image of : {book.Title}";
            var colorList = Enum.GetValues(typeof(KnownColor))
                            .Cast<KnownColor>()
                            .ToList();
            var id =Math.Abs( name.GetHashCode());
            if(id > colorList.Count)
            {
                id = id % colorList.Count;
            }
            var colorPen = Color.FromKnownColor(colorList[id]);
            using var image = new Bitmap(1664, 2560);

            using var graph = Graphics.FromImage(image);
            
            graph.Clear(Color.Azure);

            using var br = new Pen(colorPen);
            var font = new Font(new FontFamily("Arial"), 40, FontStyle.Bold);
            graph.DrawString(name,font,new SolidBrush(colorPen), new PointF(image.Width/3, image.Height/3));
            using var ms = new MemoryStream();
            image.Save(ms, ImageFormat.Png);
            ms.Position = 0;
            return ms.ToArray();

        }
        public  Author[] Authors()
        {
            var authors = new List<Author>();
            authors.Add(new Author()
            {
                ID = authors.Count + 1,
                Name = "Nietzsche, Friedrich"
            });
            authors.Add(new Author()
            {
                ID = authors.Count + 1,
                Name = "Orwell, George"
            });
            authors.Add(new Author()
            {
                ID = authors.Count + 1,
                Name = "Eliade, Mircea"
            });
            authors.Add(new Author()
            {
                ID = authors.Count + 1,
                Name = "Peterson, Jordan B"
            });
             authors.Add(new Author()
            {
                ID = authors.Count + 1,
                Name = "Rowling, J.K."
            });
            return authors.ToArray();
        }
        public Book[] Books()
        {
            var authors = Authors();
            var books = new List<Book>();
            books.Add(new Book()
            {
                ID=books.Count+1,
                Title="1984",
                Authors=authors.Where(it=>it.Name.Contains("Orwell")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "Animal Farm",
                Authors = authors.Where(it => it.Name.Contains("Orwell")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "A History of Religious Ideas (Vol. 1, Vol. 2, Vol. 3)",
                Authors = authors.Where(it => it.Name.Contains("Eliade")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "12 Rules for LifeAn Antidote to Chaos",
                Authors = authors.Where(it => it.Name.Contains("Peterson")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "Harry Potter vol 1",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "Harry Potter vol 2",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
             books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "Harry Potter vol 3",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "Harry Potter vol 4",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
             books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "Harry Potter vol 5",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "Harry Potter vol 6",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "Harry Potter vol 7",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
            
            return books.ToArray();

            
            
        }
    }
}
