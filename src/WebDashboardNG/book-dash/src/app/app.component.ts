import { Component } from '@angular/core';
import { BookApiService } from './book-api.service';
import { Books } from "./Books";
import { Book } from './Book';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-dash';
  public books : Book[];
  
  constructor( private booksService: BookApiService ) {
    
  }
  ngOnInit() {
    this.booksService.getBookApi().subscribe(data =>{ 
      this.books = data.books;
      this.books.map(it=>it);
    });
    console.log(JSON.stringify(this.books));
  }
  
  
}
