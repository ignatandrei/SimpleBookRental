import React, {Component} from 'react';
import './App.css';
import BookCatalog from './components/BookCatalog';
import Header from './components/Header';
import Footer from './components/Footer';



class App extends Component {
  

  render() {
    return (
      <div>
        <Header />
        <BookCatalog />
        <Footer />
      </div>
     )
    }
  };
 


export default App;
