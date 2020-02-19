import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {

  // please read https://angular.io/guide/component-interaction
  // Pass data from parent to child with input binding
  constructor() { }

  ngOnInit(): void {
  }

}
