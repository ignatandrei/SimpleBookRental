import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRentalPageComponent } from './book-rental-page.component';

describe('BookRentalPageComponent', () => {
  let component: BookRentalPageComponent;
  let fixture: ComponentFixture<BookRentalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRentalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRentalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
