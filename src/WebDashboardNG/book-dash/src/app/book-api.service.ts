import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './Books';
import { apiUrl } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private http: HttpClient) { }
  // getBookApi(): Observable<Books[]> {
  //   return this.http.get('https://localhost:44308/Book/GetBooks')
  //   .map(( res:any ) => res.books);
  // }
  getBookApi(): Observable<Books[]> {
    return this.http.get<Books[]>('https://localhost:5001/Book/GetBooks')
  }

  // fetchBookApi(): Observable<Books[]> {
  //   return this.http.get('{apiUrl}/Book/GetBooks').map((response: Response) => {
  //     return <Books[]>response.json();
  //   })
  // }
}
