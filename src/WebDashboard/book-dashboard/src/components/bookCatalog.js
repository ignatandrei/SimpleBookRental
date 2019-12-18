import React from 'react';
import bookCard from './bookCard';


// console.log(this.props.title, "catalog");
const bookCatalog = () => {
  return (
    <div>
      {
        this.state.books.map((books, i) => {
          return <bookCard
          key={i}
          id={books[i].id}
          title={books[i].title}
          description={books[i].description}
          
          />
        })    
        
        
      }
    </div>
  );
}

export default bookCatalog;