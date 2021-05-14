import { TestBed } from '@angular/core/testing';

import { DisplayPackService } from './display-pack.service';

describe('DisplayPackService', () => {
  let service: DisplayPackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayPackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
