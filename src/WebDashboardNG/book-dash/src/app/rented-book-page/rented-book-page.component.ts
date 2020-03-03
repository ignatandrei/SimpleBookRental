import { Component, OnInit } from '@angular/core';
import { RentedBooks } from '../RentedBooks';
import { RentedBookApiService } from '../rented-book-api.service';

import * as moment from 'moment';
import { Book } from '../Book';


@Component({
  selector: 'app-rented-book-page',
  templateUrl: './rented-book-page.component.html',
  styleUrls: ['./rented-book-page.component.css']
})
export class RentedBookPageComponent implements OnInit {
  
  public cancelRental : boolean = false;
  public listOfData : RentedBooks[];
  public deleteBook: boolean = true;

  public cancelRental: boolean = false;
  public listOfData: RentedBooks[];

  public fromDate: string;
  public toDate: string;
  constructor(private rentedBooksService: RentedBookApiService) { }

  ngOnInit() {
    this.rentedBooksService.getRentedBooks().subscribe(data => {
      this.listOfData = data;
      console.log(this.listOfData);
      for (const list of this.listOfData) {
        this.fromDate = moment(list.fromDate).format('MMMM Do YYYY, HH:mm:ss');
        this.toDate = moment(list.toDate).format('MMMM Do YYYY, HH:mm:ss');
        list.cancelRental = false;
      }

    });
    


  }
  // delete(book: Book): void {
  //   this.listOfData = this.listOfData.filter(b => b !== book);
  //   this.rentedBooksService.deleteBook(book).subscribe();
  // }
  
  unRentBook(id:number){
    this.rentedBooksService.unRentBook(id).subscribe(data=> {
      if (data == true) {
        this.cancelRental = true;
        this.deleteBook = !this.deleteBook;
        
      } else {
        window.alert('Can\'t cancel rental');
    }});
  }

}
