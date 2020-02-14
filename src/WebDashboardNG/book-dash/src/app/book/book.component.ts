import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  public myBook: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
