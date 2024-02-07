import { TestBed } from '@angular/core/testing';

import { CompanySubscriptionServiceService } from './company-subscription-service.service';

describe('CompanySubscriptionServiceService', () => {
  let service: CompanySubscriptionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanySubscriptionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
