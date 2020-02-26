import { Component, OnInit } from '@angular/core';
import { RentedBooks } from '../RentedBooks';
import { RentedBookApiService } from '../rented-book-api.service';
import { RentedBook } from '../RentedBook';
import * as moment from 'moment';


@Component({
  selector: 'app-rented-book-page',
  templateUrl: './rented-book-page.component.html',
  styleUrls: ['./rented-book-page.component.css']
})
export class RentedBookPageComponent implements OnInit {
  
  public cancelRental : boolean = false;
  public listOfData : RentedBooks[];
  public rentedBook : RentedBook;
  public fromDate : string;
  public toDate : string;
  constructor(private rentedBooksService: RentedBookApiService) { }

  ngOnInit() {
    this.rentedBooksService.getRentedBooks().subscribe(data =>{ 
      this.listOfData = data;
      console.log(this.listOfData);
      console.log("test " + this.rentedBook.id);
      this.fromDate = moment(this.listOfData[0].fromDate).startOf('hour').fromNow();
      this.toDate = moment(this.listOfData[0].toDate).startOf('hour').fromNow();
      
    });
    //TODO : unrent book

    
  }
  
  

  unRentBook(){
    this.rentedBooksService.unRentBook(this.listOfData[0].book.id).subscribe(data=> {
      if (data == true) {
        this.cancelRental = true;
        console.log("cancel rental" + this.cancelRental + this.rentedBook.id)
      } else {
        window.alert("Can't cancel rental");
        
    }})
    console.log("cancel rental" + this.cancelRental)
  }

}
