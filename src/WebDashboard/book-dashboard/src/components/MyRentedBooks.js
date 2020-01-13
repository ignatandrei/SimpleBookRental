import React, { useState, useEffect, useContext} from 'react';
import { BookContext } from './BookContext';
import BookCard from './bookCard';
import RentedBooksTable from './RentedBooksTable';

const MyRentedBooks = () => {

    const { books } = useContext(BookContext);
    const [ rentedBooks, setRentedBooks ] = useState([]);
    
    useEffect(() => {
        const rentBooks = async () => {
            const response = await fetch("https://bookrentalapi20191216080922.azurewebsites.net/UserOperations/RentedBooks");
            const jsonResponse = await response.json();
            console.log('working api rentedbooks!');
            console.log(JSON.stringify(jsonResponse));
            setRentedBooks(jsonResponse);
            return jsonResponse;
        };
    
        rentBooks();
    }, []);

    return (
        <div className="tc">
         
       
        
        <div>
        

        <RentedBooksTable
                data={rentedBooks}
                
                />
            
        

        </div>
            
        </div>
    )
}

export default MyRentedBooks;