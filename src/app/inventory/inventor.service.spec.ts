import { TestBed, inject } from '@angular/core/testing';

import { InventorService } from './inventor.service';

describe('InventorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventorService]
    });
  });

  it('should be created', inject([InventorService], (service: InventorService) => {
    expect(service).toBeTruthy();
  }));
});
