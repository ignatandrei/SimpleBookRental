import React, {Component} from 'react';
import './App.css';
import BookCatalog from './components/BookCatalog';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends Component {
  

  render() {
    return (
      <div>
      <BrowserRouter>
        <Header />
        <BookCatalog />
        <Footer />
      </BrowserRouter>
        
      </div>
     )
    }
  };
 


export default App;
