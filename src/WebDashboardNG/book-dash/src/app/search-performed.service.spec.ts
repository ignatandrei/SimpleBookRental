import { TestBed } from '@angular/core/testing';

import { SearchPerformedService } from './search-performed.service';

describe('SearchPerformedService', () => {
  let service: SearchPerformedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPerformedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
