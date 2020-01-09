import React, { useContext, useEffect, useState, Component } from 'react';
import { Route, Switch } from "react-router-dom";
import BookCatalog from "./BookCatalog";
import MyRentedBooks from './MyRentedBooks';
import Header from './Header';
import Footer from './Footer';
import BookContextProvider from './BookContext';
import { BookContext } from './BookContext';



// const Routes = () => {

//   const {books?} = useContext(BookContext);
  
// //   const [books, setBooks] = useState([]);
  

// //   console.log(books, "working route")

// //   useEffect(() => {
// //     const getBooks = async () => {
// //         const response = await fetch("https://bookrentalapi20191216080922.azurewebsites.net/Book/GetBooks");
// //         const jsonResponse = await response.json();
// //         console.log(jsonResponse.books, 'working useeffect route');
// //         setBooks(jsonResponse.books);
// //     };

// //     getBooks();
// // }, []);

//   if(books.length){
//     return <h1>LOADING BOOKS</h1>
//   } else {
//     return (
//       <div>
//       <BookContextProvider>
//           <Header />
//           <Switch>
          
            
//               <Route exact path="/" component={BookCatalog} />
            
            
//             <Route path="/MyRentedBooks" component={MyRentedBooks} /> 
  
//           </Switch>
//           <Footer />
//           </BookContextProvider>
//       </div>
//     )
//   }
  
// }

class Routes extends Component {
  render() {
    return (
      <BookContextProvider>
           <Header />
          <Switch>
          
            
            <Route exact path="/" component={BookCatalog} />
            
            
            <Route path="/MyRentedBooks" component={MyRentedBooks} /> 
  
           </Switch>
           <Footer />
           </BookContextProvider>
    )
  }
}
export default Routes;