import { TestBed } from '@angular/core/testing';

import { JobSeekerApplicationSocketConfigService } from './job-seeker-application-socket-config.service';

describe('JobSeekerApplicationSocketConfigService', () => {
  let service: JobSeekerApplicationSocketConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSeekerApplicationSocketConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
