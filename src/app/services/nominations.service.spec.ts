import { TestBed, inject } from '@angular/core/testing';

import { NominationsService } from './nominations.service';

describe('NominationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NominationsService]
    });
  });

  it('should be created', inject([NominationsService], (service: NominationsService) => {
    expect(service).toBeTruthy();
  }));
});
