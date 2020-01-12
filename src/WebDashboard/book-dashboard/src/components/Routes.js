import React, { useContext, useEffect, useState, Component } from 'react';
import { Route, Switch } from "react-router-dom";
import BookCatalog from "./BookCatalog";
import MyRentedBooks from './MyRentedBooks';
import Header from './Header';
import Footer from './Footer';
import BookContextProvider from './BookContext';
import { BookContext } from './BookContext';





const Routes = () => {
  
    return (
      <BookContextProvider>
           <Header>
           
           </Header>
          <Switch>
          
            
            <Route exact path="/" component={BookCatalog} />
            
            
            <Route path="/MyRentedBooks" component={MyRentedBooks} /> 
  
           </Switch>
           <Footer />
           </BookContextProvider>
    )
  
}
export default Routes;