import { Component, OnInit, Input } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { Books } from "../Books";
import { Book } from '../Book';
import { Author } from '../Author';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() 
  public book : Book;
  
  public imageUrl: string;
  
  constructor(  ) {
  this.imageUrl = environment.apiUrl + 'Book/GetImage';
  }
  ngOnInit() {
    //TODO: add call to /UserOperations/RentedBooks
      //and display rented books with different color / etc...

      //TODO: add rent button
      //https://angular.io/tutorial/toh-pt2 ,  (click)="onSelect(hero)

      //TODO: search books
      //https://angular.io/guide/practical-observable-usage
    }
    
  }


