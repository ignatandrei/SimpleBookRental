import React, { Component } from 'react';
import { Input } from 'antd';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


const { Search } = Input;


const SearchBox = ({searchTerm, handleChange}) => {
    
    // const typeahead = fromEvent(Search, 'input').pipe(
    //     map((e: KeyboardEvent) => e.target.value),
    //     filter(text => text.length > 2),
    //     debounceTime(10),
    //     distinctUntilChanged(),
    //     switchMap(() => ajax('/api/endpoint'))
    //   );

    //   typeahead.subscribe(data => {
    //     books
    //     // Handle the data from the API
        
    //    });

    return (
            
                <Search
                    placeholder="Search Books"
                    value={searchTerm}
                    style={{ width: 200 }}
                    onChange={handleChange}
                />
            
    )
    
}

export default SearchBox;