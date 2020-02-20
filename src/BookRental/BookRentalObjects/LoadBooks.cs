using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp.Processing.Processors.Text;
using SixLabors.Primitives;
using System.Collections.Generic;
//using System.Drawing;
//using System.Drawing.Imaging;
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
            var name = book == null ? "Not found book" : $"(image) : {book.Title}";
            int hash = name.GetHashCode();
            int r = (hash & 0xFF0000) >> 16;
            int g = (hash & 0x00FF00) >> 8;
            int b = hash & 0x0000FF;

            using var ms = new MemoryStream();
            //using var image = new Image<Rgba32>(1664, 2560);
            using var image = new Image<Rgba32>(416, 640);
            //var allFonts= SystemFonts.Collection.Families.Union(SystemFonts.Families);
            //var font = SystemFonts.CreateFont(allFonts.First().Name, 30);

            FontCollection fonts = new FontCollection();
            
            FontFamily font1 = fonts.Install("bakery.ttf");
            var font = new Font(font1, 50);
            var opt = new TextGraphicsOptions { Antialias = true, WrapTextWidth = 350 };
            
            var brush = Brushes.Solid(Color.Red);
            var start = new PointF(image.Width / 3, image.Height / 3);
            var proc= new DrawTextProcessor(opt, name, font, brush, null,start );
            image.Mutate(x => x
                    .Fill(Color.Azure)
                    .ApplyProcessor(proc));
            image.SaveAsPng(ms);
            
            ms.Position = 0;
            return ms.ToArray();
            //The type initializer for 'Gdip' threw an exception
            //var colorList = Enum.GetValues(typeof(KnownColor))
            //                .Cast<KnownColor>()
            //                .ToList();
            //var id =Math.Abs( name.GetHashCode());
            //if(id > colorList.Count)
            //{
            //    id = id % colorList.Count;
            //}
            //var colorPen = Color.FromKnownColor(colorList[id]);
            //using var image = new Bitmap(1664, 2560);

            //using var graph = Graphics.FromImage(image);

            //graph.Clear(Color.Azure);

            //using var br = new Pen(colorPen);
            //var font = new Font(new FontFamily("Arial"), 40, FontStyle.Bold);
            //graph.DrawString(name,font,new SolidBrush(colorPen), new PointF(image.Width/3, image.Height/3));
            //using var ms = new MemoryStream();
            //image.Save(ms, ImageFormat.Png);
            //ms.Position = 0;
            //return ms.ToArray();

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
            authors.Add(new Author()
            {
                ID = authors.Count + 1,
                Name = "Andrzej Sapkowski"
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
                Description = "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays on abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
                Authors =authors.Where(it=>it.Name.Contains("Orwell")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "Animal Farm",
                Description = "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays on abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
                Authors = authors.Where(it => it.Name.Contains("Orwell")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "A History of Religious Ideas (Vol. 1, Vol. 2, Vol. 3)",
                Description = "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays on abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
                Authors = authors.Where(it => it.Name.Contains("Eliade")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "12 Rules for Life: An Antidote to Chaos",
                Description = "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays on abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
                Authors = authors.Where(it => it.Name.Contains("Peterson")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "The Philosopher's Stone",
                Description = "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays on abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "The Chamber of Secrets",
                Description = "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays on abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
             books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "The Prisoner of Azkaban",
                 Description = "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays on abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
                 Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "The Goblet of Fire",
                Description = "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays on abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
             books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "The Order of the Phoenix",
                Description = "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays on abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "The Half-Blood Prince",
                Description = "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays on abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "The Deathly Hallows",
                Description = "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays on abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
                Authors = authors.Where(it => it.Name.Contains("Rowling")).ToArray(),

            });
            books.Add(new Book()
            {
                ID = books.Count + 1,
                Title = "The Last Wish",
                Description = "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays on abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
                Authors = authors.Where(it => it.Name.Contains("Andrzej Sapkowski")).ToArray(),

            });

            return books.ToArray();

            
            
        }
    }
}
