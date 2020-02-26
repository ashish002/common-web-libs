import { TestBed } from '@angular/core/testing';

import { DaterangepickerLibService } from './daterangepicker-lib.service';

describe('DaterangepickerLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaterangepickerLibService = TestBed.get(DaterangepickerLibService);
    expect(service).toBeTruthy();
  });
});
