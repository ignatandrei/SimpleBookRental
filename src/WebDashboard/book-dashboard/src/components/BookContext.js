import React, { useState, createContext, useEffect } from "react";


export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([]);
  

  // console.log(books, "working bookcontext");

  useEffect(() => {
    const getBooks = async () => {
        const response = await fetch("https://localhost:44308/Book/GetBooks");
        const jsonResponse = await response.json();
        // console.log(jsonResponse.books, 'working api bookcontext');
        setBooks(jsonResponse.books);
    };

    getBooks();
}, []);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;