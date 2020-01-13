import React, { useState, useEffect, useContext} from 'react';
import { BookContext } from './BookContext';
import BookCard from './bookCard';
import RentedBooksTable from './RentedBooksTable';

const MyRentedBooks = () => {

    const { books } = useContext(BookContext);
    const [ rentedBooks, setRentedBooks ] = useState({});

    useEffect(() => {
        const rentBooks = async () => {
            const response = await fetch("https://bookrentalapi20191216080922.azurewebsites.net/UserOperations/RentedBooks");
            const jsonResponse = await response.json();
            console.log(jsonResponse.data, 'working api rentedbooks');
            setRentedBooks(jsonResponse.data);
        };
    
        rentBooks();
    }, []);

    return (
        <div className="tc">
        
        <div>
        

        <RentedBooksTable
                data={books}
                
                />
            
        

        </div>
            
        </div>
    )
}

export default MyRentedBooks;