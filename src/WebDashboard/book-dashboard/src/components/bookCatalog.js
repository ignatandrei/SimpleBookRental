import React, {useContext} from 'react';
import BookCard from './BookCard';
// import SearchBox from './SearchBox';
import { BookContext } from './BookContext';


const BookCatalog = () => {

  const { books } = useContext(BookContext); 
  console.log(books, "api bookcatalog")
 
    let bookNotVisible = books.length;

    
  return (
    <div className="tc">

    <div>
     
    </div>
    <div>
    { bookNotVisible>0 &&
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
      
      
    </div>
  );
}

export default BookCatalog;