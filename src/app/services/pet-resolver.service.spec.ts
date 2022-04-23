import { TestBed } from '@angular/core/testing';

import { PetResolverService } from './pet-resolver.service';

describe('PetResolverService', () => {
  let service: PetResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
