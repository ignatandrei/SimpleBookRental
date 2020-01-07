import React from 'react';
import { Route, Switch } from "react-router-dom";
import BookCatalog from "./BookCatalog";
import MyRentedBooks from './MyRentedBooks';
import Header from './Header';
import Footer from './Footer';



const Routes = () => {
  return (
    <div>
        <Header />
        <Switch>
          <Route exact path="/" component={BookCatalog} />
          <Route path="/MyRentedBooks" component={MyRentedBooks} />    
        </Switch>
        <Footer />
    </div>
  )
}

export default Routes;