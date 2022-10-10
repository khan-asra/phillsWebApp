import { TestBed } from '@angular/core/testing';

import { FaqResolverService } from './faq-resolver.service';

describe('FaqResolverService', () => {
  let service: FaqResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
