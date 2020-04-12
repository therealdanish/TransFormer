import { TestBed } from '@angular/core/testing';

import { GfoGuard } from './gfo.guard';

describe('GfoGuard', () => {
  let guard: GfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
