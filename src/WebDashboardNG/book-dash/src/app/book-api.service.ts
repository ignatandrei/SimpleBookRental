import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Books } from './Books';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
 
})

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
  
export class BookApiService {
  
private url = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getBookApi(): Observable<Books> {
    
    
    return this.http.get<Books>(this.url + 'Book/GetBooks');
  }
  rentABook(book : Book[]): Observable<Book[]> {
    
    return this.http.post<Book[]>(this.url + 'UserOperations/RentBook/', book, httpOptions);  //TODO: finish rentabook post
      
  }

}
