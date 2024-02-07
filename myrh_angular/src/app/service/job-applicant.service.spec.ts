import { TestBed } from '@angular/core/testing';

import { JobApplicantService } from './job-applicant.service';

describe('JobApplicantService', () => {
  let service: JobApplicantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobApplicantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
