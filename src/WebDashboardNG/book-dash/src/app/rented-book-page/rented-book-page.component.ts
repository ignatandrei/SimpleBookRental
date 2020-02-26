import { Component, OnInit } from '@angular/core';
import { RentedBooks } from '../RentedBooks';
import { RentedBookApiService } from '../rented-book-api.service';

@Component({
  selector: 'app-rented-book-page',
  templateUrl: './rented-book-page.component.html',
  styleUrls: ['./rented-book-page.component.css']
})
export class RentedBookPageComponent implements OnInit {
  
  
  public listOfData: RentedBooks[];
  constructor(private rentedBooksService: RentedBookApiService) { }

  ngOnInit() {
    this.rentedBooksService.getRentedBooks().subscribe(data =>{ 
      this.listOfData = data;

      console.log(this.listOfData);
      
      
    });
    //TODO : unrent book
  }

}
