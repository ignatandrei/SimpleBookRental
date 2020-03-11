import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { RentedBooks } from "../RentedBooks";
import { RentedBookApiService } from "../rented-book-api.service";

import * as moment from "moment";
import { Book } from "../Book";
import { NzConfigService } from "ng-zorro-antd";

@Component({
  selector: "app-rented-book-page",
  templateUrl: "./rented-book-page.component.html",
  styleUrls: ["./rented-book-page.component.css"]
})
export class RentedBookPageComponent implements OnInit {
  public noBooksFound: string = "No Books Rented";
  public listOfData: RentedBooks[];
  public loading: boolean = true;
  @ViewChild("customTpl", { static: false }) customTpl: TemplateRef<any>;
  public fromDate: string;
  public toDate: string;
  constructor(
    private rentedBooksService: RentedBookApiService,
    private nzConfigService: NzConfigService
  ) {}

  ngOnInit() {
    this.rentedBooksService.getRentedBooks().subscribe(data => {
      this.listOfData = data;
      this.loading = false;
      console.log(this.listOfData);

      for (const list of this.listOfData) {
        this.fromDate = moment(list.fromDate).format("MMMM Do YYYY, HH:mm:ss");
        this.toDate = moment(list.toDate).format("MMMM Do YYYY, HH:mm:ss");
      }
    });

    this.onConfigChange();
  }
  onConfigChange(): void {
    this.nzConfigService.set("empty", {
      nzDefaultEmptyContent: this.customTpl
    });
  }

  unRentBook(id: number) {
    this.rentedBooksService.unRentBook(id).subscribe(data => {
      if (data == true) {
        this.listOfData = this.listOfData.filter(d => d.book.id !== id);
      } else {
        window.alert("Can't cancel rental");
      }
    });
  }
}
