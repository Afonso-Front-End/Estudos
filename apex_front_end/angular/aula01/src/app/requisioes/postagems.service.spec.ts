import { TestBed } from '@angular/core/testing';

import { PostagemsService } from './postagems.service';

describe('PostagemsService', () => {
  let service: PostagemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostagemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
