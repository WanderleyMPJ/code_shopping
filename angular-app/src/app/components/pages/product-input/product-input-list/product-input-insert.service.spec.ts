import { TestBed, inject } from '@angular/core/testing';

import { ProductInputInsertService } from './product-input-insert.service';

describe('ProductInputInsertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductInputInsertService]
    });
  });

  it('should be created', inject([ProductInputInsertService], (service: ProductInputInsertService) => {
    expect(service).toBeTruthy();
  }));
});
