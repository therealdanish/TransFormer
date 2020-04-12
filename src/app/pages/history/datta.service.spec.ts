import { TestBed } from '@angular/core/testing';

import { DattaService } from './datta.service';

describe('DattaService', () => {
  let service: DattaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DattaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
