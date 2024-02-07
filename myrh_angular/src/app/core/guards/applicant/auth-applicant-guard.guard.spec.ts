import { TestBed } from '@angular/core/testing';

import { AuthApplicantGuard } from './auth-applicant-guard.guard';

describe('AuthApplicantGuardGuard', () => {
  let guard: AuthApplicantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthApplicantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
