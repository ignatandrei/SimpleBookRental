import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDataRentedComponent } from './default-data-rented.component';

describe('DefaultDataRentedComponent', () => {
  let component: DefaultDataRentedComponent;
  let fixture: ComponentFixture<DefaultDataRentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultDataRentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDataRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
