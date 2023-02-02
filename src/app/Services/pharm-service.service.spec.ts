import { TestBed } from '@angular/core/testing';

import { PharmServiceService } from './pharm-service.service';

describe('PharmServiceService', () => {
  let service: PharmServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
