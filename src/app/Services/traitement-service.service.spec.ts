import { TestBed } from '@angular/core/testing';

import { TraitementServiceService } from './traitement-service.service';

describe('TraitementServiceService', () => {
  let service: TraitementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraitementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
