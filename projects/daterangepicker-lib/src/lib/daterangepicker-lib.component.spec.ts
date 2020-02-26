import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaterangepickerLibComponent } from './daterangepicker-lib.component';

describe('DaterangepickerLibComponent', () => {
  let component: DaterangepickerLibComponent;
  let fixture: ComponentFixture<DaterangepickerLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaterangepickerLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaterangepickerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
