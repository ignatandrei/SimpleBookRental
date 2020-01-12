import React from 'react';
import { Button } from 'antd';


const BookCard = ( {author, title, description, imgId} ) => {
  return (
    <div className="tc dib grow br2 ba dark-gray b--black-10 w-20 mv4 mh2 h-25 mw-30">
      {<img className="br2 br--top h-25 w-100" alt='book' src={`https://bookrentalapi20191216080922.azurewebsites.net/Book/GetImage/${imgId}`} />}
      
      <h3>Author:<br />{author}</h3>
      <h5 className="mv0">Title:<br />{title}</h5>
      <p className="">Description:<br /> {description}</p>
      <Button>Rent</Button>
    
      </div>
  );
}
  export default BookCard;