import { TestBed } from '@angular/core/testing';

import { ApiWithBreakerService } from './api-with-breaker.service';

describe('ApiWithBreakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiWithBreakerService = TestBed.get(ApiWithBreakerService);
    expect(service).toBeTruthy();
  });
});
