import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchPerformedService {

  private aNewSearch = new Subject<string>();
  public newSearchObservable = this.aNewSearch.asObservable();
  public NewSearchAnnounce(filter: string ){
      console.log(`searching for ${filter}`);
      this.aNewSearch.next(filter);
  }

  constructor() { }
}
