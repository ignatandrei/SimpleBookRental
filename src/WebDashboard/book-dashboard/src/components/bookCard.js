import React from 'react';
import { Button } from 'antd';


const BookCard = ( {author, title, description, imgId, rentId } ) => {
  return (
    <>
    <div className="tc dib br2 ba dark-gray b--black-10 w-20 mv4 mh2 h-25 mw-30">
      {<img className="br2 br--top h-25 w-100" alt='book' src={`https://bookrentalapi20191216080922.azurewebsites.net/Book/GetImage/${imgId}`} />}
      
      <h3>Author:<br />{author}</h3>
      <h5 className="mv0">Title:<br />{title}</h5>
      <p className="">Description:<br /> {description}</p>
      <button onClick={async ()=>{
        window.alert("trying to rent" + imgId);
        var url='https://bookrentalapi20191216080922.azurewebsites.net/UserOperations/RentBook/' +imgId;
        var res= await fetch(url,
          {
            method: 'post',
            headers: {
              'Content-Type': 'text/plain',
            },
          });
          var data=(await res.text()).toString();
          var rented=(data === "true");
          if(rented){
            window.alert(" you have rented the book!");
          }
          else{
            window.alert(" Rent failed!"); // TODO: see if it is not already rented
          }

      }}>
      Rent the {title}
          </button>
      
      </div>
      </>    
  );
}
  export default BookCard;