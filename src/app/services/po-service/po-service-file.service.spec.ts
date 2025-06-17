import { TestBed } from '@angular/core/testing';

import { PoServiceFileService } from './po-service-file.service';

describe('PoServiceFileService', () => {
  let service: PoServiceFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoServiceFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
