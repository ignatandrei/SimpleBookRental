import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedBookPageComponent } from './rented-book-page.component';

describe('RentedBookPageComponent', () => {
  let component: RentedBookPageComponent;
  let fixture: ComponentFixture<RentedBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentedBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentedBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
