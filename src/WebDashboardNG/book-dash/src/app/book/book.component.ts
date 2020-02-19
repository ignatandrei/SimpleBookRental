import { Component, OnInit, Input } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { Books } from "../Books";
import { Book } from '../Book';
import { Author } from '../Author';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() 
  public book : Book;

  
  constructor( private booksService: BookApiService ) {
    //to be deteled, because it will be injected Pass data from parent to child with input binding
    this.book = new Book();
    this.book.title="AAAAA";
    this.book.id=8;
    this.book.description = "ASdada";
    this.book.authors =[];
    let a=new Author();
    a.id=99;
    a.name = "ASDASD";
    this.book.authors.push(a);
  }
  ngOnInit() {
    // this.booksService.getBookApi().subscribe(data =>{ 
    //   //this.books = data.books;
      

    // });
    //console.log(JSON.stringify(this.books));
  }

}
