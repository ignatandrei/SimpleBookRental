import { Component, OnInit, Input } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { Books } from "../Books";
import { Book } from '../Book';
import { Author } from '../Author';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() 
  public book : Book;
  

  
  constructor(  ) {
    //to be deteled, because it will be injected Pass data from parent to child with input binding
    
  }
  ngOnInit() {
    
      

    }
    
  }


