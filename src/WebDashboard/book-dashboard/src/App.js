import React, {Component} from 'react';
import BookCatalog from './components/bookCatalog';
import BookCard from './components/bookCard';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loading: false,
      books: [],
      info: {}
    }
  }
    


async componentDidMount() {
  const url = "https://bookrentalapi20191216080922.azurewebsites.net/Book/GetBooks";
  const response = await fetch(url);
  const data = await response.json();
  console.log(this.state.books);
  this.setState({ books: data,info:{}, loading: false})
  console.log(this.state.books);
  const infoUrl="https://bookrentalapi20191216080922.azurewebsites.net/Info/GetLatestCommit";
  const responsInfo = await fetch(infoUrl);
  const dataInfo = await responsInfo.json();
  console.log(dataInfo);
  this.setState({ books: data,info:dataInfo, loading: false})
  
  
}


  render() {
    return (
     
        
        <div className='tc'>
            <h1>Simple Book Rental</h1>
            
            <h3>{this.state.books.length}</h3>
            <ol>
           
            {this.state.books.map(home => <li>{home.title}</li>)}
            </ol>
            
      
      </div>
      
    )
    
      
  }
}

export default App;
