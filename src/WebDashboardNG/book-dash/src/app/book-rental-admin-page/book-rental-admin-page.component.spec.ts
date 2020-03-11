import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRentalAdminPageComponent } from './book-rental-admin-page.component';

describe('BookRentalAdminPageComponent', () => {
  let component: BookRentalAdminPageComponent;
  let fixture: ComponentFixture<BookRentalAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRentalAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRentalAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
