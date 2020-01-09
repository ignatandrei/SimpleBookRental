import React, { Component, useContext, useEffect, useState } from 'react';
import { Input } from 'antd';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BookContext } from './BookContext';


const { Search } = Input;


const SearchBox = () => {

    let [books, setBooks] = useState([]);
  

  console.log(books, "working search")

//   useEffect(() => {
//     const getBooks = async () => {
//         const response = await fetch("https://bookrentalapi20191216080922.azurewebsites.net/Book/GetBooks");
//         const jsonResponse = await response.json();
//         console.log(jsonResponse.books, 'working api search');
//         setBooks(jsonResponse.books);
//     };

//     getBooks();
// }, []);
    
    const typeahead = fromEvent(Search, 'input').pipe(
        map((e: KeyboardEvent) => e.target.value),
        filter(text => text.length > 2),
        debounceTime(10),
        distinctUntilChanged(),
        switchMap((books) => ajax(books))
      );

    //   typeahead.subscribe(data => {books});
    // const filter = e =>{
    //     books({ filter: e.target.value})
    // };
    // if(books.filter){
    //     books = books.filter( books =>
    //         books.title.toLowerCase()
    //         .includes(books.filter.toLowerCase()))
    // };

    return (
            
                <Search
                    placeholder="Search Books"
                    style={{ width: 200 }}
                    onChange={typeahead}
                    
                />
            
    )
    
}

export default SearchBox;