import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AllRentedBooks } from "./allRentedBooks";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AdminPageService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllRentedBooks(): Observable<AllRentedBooks[]> {
    return this.http.get<AllRentedBooks[]>(
      this.apiUrl + "api/Admin/AllRentedBooks"
    );
  }
}
