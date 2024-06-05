import { TestBed } from '@angular/core/testing';

import { NumberToTextService } from './number-to-text.service';

describe('NumberToTextService', () => {
  let service: NumberToTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberToTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
