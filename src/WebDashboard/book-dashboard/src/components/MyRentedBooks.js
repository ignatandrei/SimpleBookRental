import React, { useState, useEffect, useContext} from 'react';
import { BookContext } from './BookContext';
import BookCard from './BookCard';

const MyRentedBooks = () => {

    const { books } = useContext(BookContext);
    const { rentBooks, setRentedBook } = useState({});

    // useEffect(() => {
    //     const rentBooks = async () => {
    //         const response = await fetch("https://bookrentalapi20191216080922.azurewebsites.net/UserOperations/RentBook/");
    //         const jsonResponse = await response.json();
    //         console.log(jsonResponse.rent, 'working api bookcontext');
    //         setRentedBook(jsonResponse.rent);
    //     };
    
    //     rentBooks();
    // }, []);

    return (
        <div className="tc">
        <div>
            <h1>My Rented Books</h1>
        </div>
        <div>
        Rented books
        </div>
        <div>
        

        {
            books.map((book,i) => {
                return <BookCard 
                    imgId={books[i].id}
                    id={`https://bookrentalapi20191216080922.azurewebsites.net/UserOperations/RentedBooks/${books[i].id}`}
                
                />
            })
        }

        </div>
            
        </div>
    )
}

export default MyRentedBooks;