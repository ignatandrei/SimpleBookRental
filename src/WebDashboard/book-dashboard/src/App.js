import React, {Component} from 'react';
import './App.css';
import BookCatalog from './components/BookCatalog';
import Header from './components/Header';
import Footer from './components/Footer';



class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     books: [],
  //     info: null
  //   }
  // }

      
      
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
  // fetch('https://bookrentalapi20191216080922.azurewebsites.net/Book/GetBooks')
  //   .then(response=> response.json())
  //   .then(data => {this.setState({ books: data })});
    
    // fetch('https://bookrentalapi20191216080922.azurewebsites.net/Info/GetLatestCommit')
    //   .then(response=> response.json())
    //   .then(dataInfo => this.setState({ info: dataInfo}));
    
    
  

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
