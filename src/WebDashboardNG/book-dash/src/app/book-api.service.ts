import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Books } from './Books';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
private url = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getBookApi(): Observable<Books> {
    
    
    return this.http.get<Books>(this.url + 'Book/GetBooks');
  }
  rentABook(book: Books): Observable<Books> {
    
    return this.http.post<Books>(this.url + 'UserOperations/RentBook' + this.books.id, book);  //TODO: finish rentabook post
      
  }

}
