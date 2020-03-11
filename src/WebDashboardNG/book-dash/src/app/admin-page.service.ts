import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AdminPageService {
  private apiUrl = environment.apiUrl;
  constructor() {}
}
