import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentedBooks } from './RentedBooks';

@Injectable({
  providedIn: 'root'
})
export class RentedBookApiService {

  private rentedBookUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getRentedBooks(): Observable<RentedBooks[]> {

    

    return this.http.get<RentedBooks[]>(this.rentedBookUrl + 'UserOperations/RentedBooks');
  }

  unRentBook(rentedBookId : number): Observable<boolean> {
    return this.http.post<boolean>(this.rentedBookUrl + `UserOperations/UnRentBookCurrentUser/${rentedBookId}`, null)
  }
}
