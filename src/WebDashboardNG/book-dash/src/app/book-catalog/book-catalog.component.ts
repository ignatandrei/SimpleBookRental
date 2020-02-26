import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Books } from "../Books";
import { Book } from '../Book';
import { Author } from '../Author';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {

  public books: Book[];
  
  

  // please read https://angular.io/guide/component-interaction
  // Pass data from parent to child with input binding
  constructor(private booksService: BookApiService) { }

  ngOnInit() {
    this.booksService.getBookApi().subscribe(data =>{ 
      this.books = data.books;
      
      console.log(this.books);
    });
    
   
  }

}
