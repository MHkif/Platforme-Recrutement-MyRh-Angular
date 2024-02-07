import { TestBed } from '@angular/core/testing';

import { AuthCompanyGuard } from './auth-company-guard.guard';

describe('AuthCompanyGuardGuard', () => {
  let guard: AuthCompanyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCompanyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
