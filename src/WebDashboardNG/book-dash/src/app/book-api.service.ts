import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Books } from './Books';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private http: HttpClient) { }
  getBookApi(): Observable<Books> {
    let url = environment.apiUrl;
    url =  'http://localhost:5000/'; // modifica in environemnt.ts si sterge linia aceasta
    return this.http.get<Books>(url + 'Book/GetBooks');
  }

}
