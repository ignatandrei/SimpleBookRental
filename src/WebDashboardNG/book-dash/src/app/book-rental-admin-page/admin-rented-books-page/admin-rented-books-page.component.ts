import { Component, OnInit } from "@angular/core";
import { AllRentedBooks } from "src/app/allRentedBooks";
import { AdminPageService } from "src/app/admin-page.service";

@Component({
  selector: "app-admin-rented-books-page",
  templateUrl: "./admin-rented-books-page.component.html",
  styleUrls: ["./admin-rented-books-page.component.css"]
})
export class AdminRentedBooksPageComponent implements OnInit {
  public allRentedBooks: AllRentedBooks[];
  constructor(private adminPageService: AdminPageService) {}

  ngOnInit(): void {
    this.adminPageService.getAllRentedBooks().subscribe(data => {
      this.allRentedBooks = data;
      this.testingApis();
    });
  }

  testingApis(): void {
    console.log("testing api" + this.allRentedBooks);
  }
}
