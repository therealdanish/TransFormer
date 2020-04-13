import { TestBed } from '@angular/core/testing';

import { LlgGuard } from './llg.guard';

describe('LlgGuard', () => {
  let guard: LlgGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LlgGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
