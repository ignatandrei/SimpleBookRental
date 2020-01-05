import React from 'react';


const BookCard = ( {id, author, title, description} ) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {<img style={{width:300, height:300}} alt='book' src={`https://pixabay.com/get/54e3dd4a4850a514f1dc8460825668204022dfe05459734c742c78dc/book-2389229_640.png`} />}
      <h2>{id}</h2>
      <h2>{author}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
  export default BookCard;