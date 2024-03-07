import { TestBed } from '@angular/core/testing';

import { BoxeadoresRingService } from './boxeadores-ring.service';

describe('BoxeadoresRingService', () => {
  let service: BoxeadoresRingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxeadoresRingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
