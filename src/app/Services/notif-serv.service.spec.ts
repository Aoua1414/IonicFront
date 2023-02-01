import { TestBed } from '@angular/core/testing';

import { NotifServService } from './notif-serv.service';

describe('NotifServService', () => {
  let service: NotifServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
