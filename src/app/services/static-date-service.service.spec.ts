import { TestBed } from '@angular/core/testing';

import { StaticDateServiceService } from './static-date-service.service';

describe('StaticDateServiceService', () => {
  let service: StaticDateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticDateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
