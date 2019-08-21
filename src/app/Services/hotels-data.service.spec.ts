import { TestBed } from '@angular/core/testing';

import { HotelsDataService } from './hotels-data.service';

describe('HotelsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelsDataService = TestBed.get(HotelsDataService);
    expect(service).toBeTruthy();
  });
});
