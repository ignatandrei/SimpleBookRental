import React, {Component} from 'react';
import bookCatalog from './components/bookCatalog';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loading: false,
      books: null
    }
  }
    


async componentDidMount() {
  const url = "https://bookrentalapi20191216080922.azurewebsites.net/Book/GetBooks";
  const response = await fetch(url);
  const data = await response.json();
  this.setState({ books: data.GetBooks, loading: false})
  console.log(this.state.books);
  
  
}


  render() {
    return (
      <div>
        
        <div className='tc'>
            <h1>Simple Book Rental</h1>
            
            <h3>{this.state.books}</h3>
           
            </div>
      
        
      
      </div>
      
    )
    
      
  }
}

export default App;