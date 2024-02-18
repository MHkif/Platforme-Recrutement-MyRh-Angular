import { TestBed } from '@angular/core/testing';

import { AreaActivityService } from './area-activity.service';

describe('AreaActivityService', () => {
  let service: AreaActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
