import { TestBed } from '@angular/core/testing';

import { ReloginGuard } from './relogin.guard';

describe('ReloginGuard', () => {
  let guard: ReloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
