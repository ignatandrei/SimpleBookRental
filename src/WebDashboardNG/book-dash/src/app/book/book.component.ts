import { Component, OnInit, Input } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { Books } from "../Books";
import { Book } from '../Book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public books : Book[];

  
  constructor( private booksService: BookApiService ) {
    
  }
  ngOnInit() {
    this.booksService.getBookApi().subscribe(data =>{ 
      this.books = data.books;
      

    });
    console.log(JSON.stringify(this.books));
  }

}
