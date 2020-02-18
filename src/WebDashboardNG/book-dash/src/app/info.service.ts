import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getLatestInfo(): Observable<Info[]> {
    let infoUrl = environment.apiUrl;

    return this.http.get<Info[]>(infoUrl + 'Info/GetLatestCommit');
  }
}
