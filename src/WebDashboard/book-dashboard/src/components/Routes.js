import React from 'react';
import { Route, Switch } from "react-router-dom";
import BookCatalog from "./BookCatalog";
import MyRentedBooks from './MyRentedBooks';


const Routes = () => {
  return (
    <div>
      <Switch>
        
        <Route exact path="/" component={BookCatalog} />
        <Route path="/MyRentedBooks" component={MyRentedBooks} />
        
      </Switch>
      
      
    </div>
  )
}

export default Routes;