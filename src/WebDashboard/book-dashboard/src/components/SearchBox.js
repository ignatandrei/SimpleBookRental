// import React, { Component, useContext, useEffect, useState, createContext } from 'react';
// import { Input } from 'antd';
// import { fromEvent } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
// import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
// import { BookContext } from './BookContext';


// const { Search } = Input;
// export const SearchContext = createContext();

// const SearchBox = (searchField, handleChange, filteredBooks) => {

//     const {books} = useContext(BookContext);
  

//   console.log(books, "working search")
//   onSearchChange = (e) => {
//     books({searchField: e.target.value})
//   }
  
//   const filteredBooks = books.filter(book =>{
//     return book.title.toLowerCase().includes(searchField.toLowerCase())
//   })
 

//     return (
//           {
//             filteredBooks.map((book, i) =>
//               <BookCatalog />)
//           }  
            
            
//     )
    
// }

// export default SearchBox;