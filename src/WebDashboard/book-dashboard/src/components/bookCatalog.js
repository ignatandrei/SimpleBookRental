import React, {useContext} from 'react';
import BookCard from './BookCard';
// import SearchBox from './SearchBox';
import { BookContext } from './BookContext';



const BookCatalog = () => {

  const { books } = useContext(BookContext);

  
  console.log(books, "api bookcatalog")
  
 
    

    
  return (
    <div className="tc">
    {
      books.map((book, i) => {
        return <BookCard
        key={i}
        imgId={books[i].id}
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