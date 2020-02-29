import { Component, OnInit } from '@angular/core';
import { RentedBooks } from '../RentedBooks';
import { RentedBookApiService } from '../rented-book-api.service';

import * as moment from 'moment';


@Component({
  selector: 'app-rented-book-page',
  templateUrl: './rented-book-page.component.html',
  styleUrls: ['./rented-book-page.component.css']
})
export class RentedBookPageComponent implements OnInit {

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


  unRentBook(id: number) {
    this.rentedBooksService.unRentBook(id).subscribe(data => {
      if (data == true) {
        // this se refera la acest component care are TOT array de carti
        // this.cancelRental = true;
        // eu vreau pe book 
        const findIDArray =this.listOfData.filter(it => it.book.id === id);
        console.log(`found number book array rented with id ${id} : ${findIDArray.length}`);
        //should be one - we discuss if the argument in id or bookrented
        findIDArray[0].cancelRental = true;

      } else {
        window.alert('Can\'t cancel rental');
    }});
  }

}
