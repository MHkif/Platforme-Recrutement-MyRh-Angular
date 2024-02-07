import { TestBed } from '@angular/core/testing';

import { JobSeekerApplicationService } from './job-seeker-application.service';

describe('JobSeekerApplicationService', () => {
  let service: JobSeekerApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSeekerApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
