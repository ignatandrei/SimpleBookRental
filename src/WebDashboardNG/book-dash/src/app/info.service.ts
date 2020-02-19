import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Info } from './info';
import { Infos } from './Infos';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getLatestInfo(): Observable<Infos> {

    const infoUrl = environment.apiUrl;

    return this.http.get<Infos>(infoUrl + 'Info/GetLatestCommit');
  }
}
