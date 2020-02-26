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
  public bookRented: boolean = false;
  public imageUrl: string;
  public rentStatus : string = "Rent Book";
  
  constructor( private rentBookService: BookApiService ) {
  this.imageUrl = environment.apiUrl + 'Book/GetImage';
  }
  ngOnInit() {
    //TODO: add call to /UserOperations/RentedBooks
      //and display rented books with different color / etc...


      //TODO: search books
      //https://angular.io/guide/practical-observable-usage
      
    }
    
    public rentABook(){
      this.rentBookService.rentABook(this.book.id).subscribe(data=> {
        if (data == true) {
          this.bookRented = true;
          this.rentStatus = "Book is rented";
        } else {
          window.alert("Couldn't rent the book");
          
      }});
    }
    
    
  }


