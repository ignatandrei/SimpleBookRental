import React from 'react';
import bookCard from './bookCard';

const bookCatalog = () => {
  return (
    <div>
      {
        this.state.books.map((home, i) => {
          return <bookCard
          key={i}
          id={home[i].id}
          author={home[i].author}
          description={home[i].description}
          />
        })
      }
    </div>
  );
}

export default bookCatalog;