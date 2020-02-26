import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Books } from './Books';
import { Book } from './Book';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/text'
  })
};
  
@Injectable({
  providedIn: 'root'
 
})

export class BookApiService {
  
private url = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getBookApi(): Observable<Books> {
    
    
    return this.http.get<Books>(this.url + 'Book/GetBooks');
  }
  rentABook(bookId : number): Observable<boolean> {
    
    return this.http.post<boolean>(this.url + `UserOperations/RentBook/${bookId}`,null);  //TODO: finish rentabook post
      
  }
  

}
