import React, {useState, useEffect} from 'react';
import BookCard from './BookCard';
import SearchBox from './SearchBox';


const BookCatalog = () => {

  const [ books, setBooks ] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  

    useEffect(() => {
        const getBooks = async () => {
            const response = await fetch("https://bookrentalapi20191216080922.azurewebsites.net/Book/GetBooks");
            const jsonResponse = await response.json();
            console.log(jsonResponse.books, 'working api');
            setBooks(jsonResponse.books);
        };

        getBooks();
    }, []);

    useEffect(() => {
      const results = books.filter(books =>
        books.title.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }, [searchTerm]);

    
  return (
    <div className="tc">

    <div>
     <SearchBox 
     searchTerm={searchTerm}
     handleChange={handleChange}
     />
    </div>
    <div>
    {
      searchResults.map((book, i) => {
        return <BookCard
        key={i}
        id={books[i].id}
        author={books[i].authors[0].name}
        title={books[i].title}
        description={books[i].description}
        />
      })
    }
    </div>
      
      
    </div>
  );
}

export default BookCatalog;