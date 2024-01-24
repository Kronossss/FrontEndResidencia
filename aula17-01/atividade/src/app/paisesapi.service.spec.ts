import { TestBed } from '@angular/core/testing';

import { PaisesapiService } from './paisesapi.service';

describe('PaisesapiService', () => {
  let service: PaisesapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisesapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
