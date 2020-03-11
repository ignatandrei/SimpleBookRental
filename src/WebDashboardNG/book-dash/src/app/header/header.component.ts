import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap
} from "rxjs/operators";
import { Book } from "../Book";
import { SearchPerformedService } from "../search-performed.service";
import { faBook } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements AfterViewInit {
  @Input()
  public book: Book;

  private typeAhead: Observable<string>;
  faBook = faBook;

  constructor(private searchFilter: SearchPerformedService) {}

  ngAfterViewInit(): void {
    const searchBox = document.getElementById("search-box");

    this.typeAhead = fromEvent(searchBox, "input").pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      //filter(text => text.length > 2),
      debounceTime(10),
      distinctUntilChanged()
      //switchMap(() => this.searchFilter.NewSearchAnnounce)
    );

    this.typeAhead.subscribe(data => {
      this.searchFilter.NewSearchAnnounce(data);
    });
  }
}
