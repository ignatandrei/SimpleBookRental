import React, {Component} from 'react';
import bookCatalog from './components/bookCatalog';
import bookCard from './components/bookCard';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      books: [],
      info: null
    }
  }
    


componentDidMount() {
  // const url = "https://bookrentalapi20191216080922.azurewebsites.net/Book/GetBooks";
  // const response = await fetch(url);
  // const data = await response.json();
  // console.log(this.state.books, 'test');
  // this.setState({ books: data,info:{}})
  // console.log(this.state.books, 'test2');
  // const infoUrl="https://bookrentalapi20191216080922.azurewebsites.net/Info/GetLatestCommit";
  // const responsInfo = await fetch(infoUrl);
  // const dataInfo = await responsInfo.json();
  // // console.log(dataInfo);
  // this.setState({ books: data,info:dataInfo})
  fetch('https://bookrentalapi20191216080922.azurewebsites.net/Book/GetBooks')
    .then(response=> response.json())
    .then(data => this.setState({ books: data }));
    
    fetch('https://bookrentalapi20191216080922.azurewebsites.net/Info/GetLatestCommit')
      .then(response=> response.json())
      .then(dataInfo => this.setState({ info: dataInfo}));
    
}

  render() {

    const { books }  = this.state;
    console.log({books}, "const");
    
    // const filterBooks = books.filter(book => {
    //   return book.title;
      
    //   console.log(book.title, "filter");
    // })
    
    // console.log(filterBooks, "lol");
    if (!books.length) {
      return <h1 className="tc">LOADING</h1>
    } else {
      return (
       
        <div className='tc'>
          <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            <nav class="f6 fw6 ttu tracked">
              <a class="link dim white dib mr3" href="#" title="Home">Simple Book Rental + Logo</a>
              <a  class="link dim white dib mr3" href="#" title="About">Rent</a>
              <a class="link dim white dib mr3" href="#" title="Store">Placeholder</a>
              <a class="link dim white dib" href="#" title="Contact">Placeholder</a>
            </nav>
          </header>
            
            <h3>{books[1].id}</h3>
            <h3>{books[1].title}</h3>
            <h3>{books[1].description}</h3>
            <h3>{books[1].authors[0].name}</h3>
            {console.log(this.state.books, "working api")}
            {console.log(bookCatalog.title, "bkctlg")
            }
            
            
          <bookCatalog books={books[1].title} />
        
          <footer className="bg-near-black white-80 pv5 pv4-l ph4">
            {(this.state.info != null) &&
              <h2 className="f6 ml3 pr2">
              Created by Andrei Ignat and Bogdan Bobe || Latest commit made by {this.state.info.lastAuthor} at {this.state.info.dateCommit} with the message: {this.state.info.latestCommit}
              </h2>
            }
        </footer>
      
      
      </div>
      
      )
    
    }
  }
}

export default App;
