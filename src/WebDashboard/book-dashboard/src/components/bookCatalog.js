import React from 'react';
import bookCard from './bookCard';

const bookCatalog = ({books}) => {
  return (
    <div>
      {
        books.map((user, i) => {
          return <bookCard
          id={books[i].id}
          author={books[i].author}
          description={books[i].description}
          />
        })
      }
    </div>
  );
}

export default bookCatalog;