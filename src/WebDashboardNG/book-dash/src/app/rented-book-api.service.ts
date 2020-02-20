import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentedBooks } from './RentedBooks';

@Injectable({
  providedIn: 'root'
})
export class RentedBookApiService {

  constructor(private http: HttpClient) { }

  getRentedBooks(): Observable<RentedBooks[]> {

    const rentedBookUrl = environment.apiUrl;

    return this.http.get<RentedBooks[]>(rentedBookUrl + 'UserOperations/RentedBooks');
  }
}
