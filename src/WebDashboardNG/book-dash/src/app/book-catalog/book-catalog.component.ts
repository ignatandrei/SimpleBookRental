import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { Books } from "../Books";
import { Book } from "../Book";
import { Author } from "../Author";
import { BookApiService } from "../book-api.service";
import { SearchPerformedService } from "../search-performed.service";

@Component({
  selector: "app-book-catalog",
  templateUrl: "./book-catalog.component.html",
  styleUrls: ["./book-catalog.component.css"]
})
export class BookCatalogComponent implements OnInit {
  public books: Book[];
  public booksFromBackEnd: Book[];

  public loading = true;

  // please read https://angular.io/guide/component-interaction
  // Pass data from parent to child with input binding
  constructor(
    private booksService: BookApiService,
    private searchFilter: SearchPerformedService
  ) {}

  ngOnInit() {
    this.booksService.getBookApi().subscribe(data => {
      this.books = data.books;
      this.booksFromBackEnd = data.books;
      this.loading = false;
      console.log(this.books);
    });

    this.searchFilter.newSearchObservable.subscribe(filter => {
      if (filter == null || filter.length === 0) {
        this.books = this.booksFromBackEnd;
      } else {
        this.books = this.booksFromBackEnd.filter(
          b => b.title.indexOf(filter) > 0
        );
      }
    });
  }
}
