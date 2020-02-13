import { Component } from '@angular/core';
import { BookApiService } from './book-api.service';
import { Books } from './Books';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-dash';
  public books = [];
  // books: Books[];
  // books$;
  constructor( private booksService: BookApiService ) {
    // fetchBookApi() {
    //  this.books$ = this.booksService.fetchBookApi()
    // };
  }
  ngOnInit() {
    this.booksService.getBookApi().subscribe(data => this.books = data);
    console.log(this.books);
  }
  
  
}
