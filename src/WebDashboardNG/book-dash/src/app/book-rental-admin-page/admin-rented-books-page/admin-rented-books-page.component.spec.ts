import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRentedBooksPageComponent } from './admin-rented-books-page.component';

describe('AdminRentedBooksPageComponent', () => {
  let component: AdminRentedBooksPageComponent;
  let fixture: ComponentFixture<AdminRentedBooksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRentedBooksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRentedBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
