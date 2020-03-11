import { Component, OnInit, Input } from "@angular/core";
import { BookApiService } from "../book-api.service";
import { Books } from "../Books";
import { Book } from "../Book";
import { Author } from "../Author";
import { environment } from "src/environments/environment";
import { RentedBookApiService } from "../rented-book-api.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  @Input()
  public book: Book;
  public bookRented: boolean = false;
  public imageUrl: string;
  public rentStatus: string = "Rent Book";
  public loading: boolean;
  public nrOfBooks: string = "3";
  public buttonType: string = "primary";
  public isLoadingRental: boolean = false;

  constructor(
    private rentBookService: BookApiService,
    private rentedBookStatus: RentedBookApiService
  ) {
    this.imageUrl = environment.apiUrl + "Book/GetImage";
  }
  ngOnInit() {
    this.checkAllBookRentalStatus();
  }

  //https://angular.io/guide/practical-observable-usage

  checkStatusBeforeRent() {
    this.rentedBookStatus.getRentedBooks().subscribe(arrRented => {
      const arrFound = arrRented.filter(rb => rb.book.id === this.book.id);
      if ((this.bookRented = arrFound.length > 0)) {
        this.buttonType = "danger";
        this.rentStatus = "Book is rented";
      } else {
        this.rentABook();
      }
    });
  }
  checkAllBookRentalStatus() {
    this.rentedBookStatus.getRentedBooks().subscribe(arrRented => {
      const arrFound = arrRented.filter(rb => rb.book.id === this.book.id);
      if ((this.bookRented = arrFound.length > 0)) {
        this.buttonType = "danger";
        this.rentStatus = "Book is rented";
      }
    });
  }

  rentABook() {
    this.rentBookService.rentABook(this.book.id).subscribe(data => {
      if (data === true) {
        this.bookRented = true;
        this.isLoadingRental = true;
        this.rentStatus = "Renting Book";
        setTimeout(() => {
          this.isLoadingRental = false;
          this.checkAllBookRentalStatus();
        }, 1200);
        // rents book everytime its clicked, should be delivering else result
      }
    });
  }
}
