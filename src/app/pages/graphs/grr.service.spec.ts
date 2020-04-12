import { TestBed } from '@angular/core/testing';

import { GrrService } from './grr.service';

describe('GrrService', () => {
  let service: GrrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
