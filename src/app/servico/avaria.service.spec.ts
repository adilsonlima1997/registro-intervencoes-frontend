import { TestBed } from '@angular/core/testing';

import { AvariaService } from './avaria.service';

describe('AvariaService', () => {
  let service: AvariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
