import { TestBed } from '@angular/core/testing';

import { ExerService } from './exer.service';

describe('ExerService', () => {
  let service: ExerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
