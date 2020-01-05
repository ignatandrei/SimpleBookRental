import React, {useState, useEffect} from 'react';
import BookCard from './BookCard';



// console.log(this.props.title, "catalog");
const BookCatalog = () => {

  const [ books, setBooks ] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const response = await fetch("https://bookrentalapi20191216080922.azurewebsites.net/Book/GetBooks");
            const jsonResponse = await response.json();
            console.log(jsonResponse.books, 'working api');
            setBooks(jsonResponse.books);
        };

        getBooks();
    }, []);

  return (
    <div>
      {
        books.map((book, i) => {
          return <BookCard
          key={i}
          id={books[i].id}
          author={books[i].authors[0].name}
          title={books[i].title}
          description={books[i].description}
          
          />
          
        })
      }
      
    </div>
  );
  
}

export default BookCatalog;