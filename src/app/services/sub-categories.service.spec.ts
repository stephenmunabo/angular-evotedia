import { TestBed, inject } from '@angular/core/testing';

import { SubCategoriesService } from './sub-categories.service';

describe('SubCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubCategoriesService]
    });
  });

  it('should be created', inject([SubCategoriesService], (service: SubCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
