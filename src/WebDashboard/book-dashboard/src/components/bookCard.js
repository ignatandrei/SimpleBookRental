import React from 'react';


const BookCard = ( {id, author, title, description} ) => {
  return (
    <div className="tc dib grow br2 ba dark-gray b--black-10 w-20 mv4 mh2 h-25 mw-30">
      {<img className="br2 br--top h-25 w-100" alt='book' src={`https://images-na.ssl-images-amazon.com/images/I/71qWDVkNMRL.jpg`} />}
      
      <h3>Author:<br />{author}</h3>
      <h5 className="mv0">Title:<br />{title}</h5>
      <p className="">Description:<br /> {description}</p>
    </div>
  );
}
  export default BookCard;