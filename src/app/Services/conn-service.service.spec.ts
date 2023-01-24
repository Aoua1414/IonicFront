import { TestBed } from '@angular/core/testing';

import { ConnServiceService } from './conn-service.service';

describe('ConnServiceService', () => {
  let service: ConnServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
