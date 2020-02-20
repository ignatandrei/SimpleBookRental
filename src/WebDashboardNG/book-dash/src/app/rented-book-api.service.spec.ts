import { TestBed } from '@angular/core/testing';

import { RentedBookApiService } from './rented-book-api.service';

describe('RentedBookApiService', () => {
  let service: RentedBookApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentedBookApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
