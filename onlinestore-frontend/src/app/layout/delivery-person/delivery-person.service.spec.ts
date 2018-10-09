import { TestBed, inject } from '@angular/core/testing';

import { DeliveryPersonService } from './delivery-person.service';

describe('DeliveryPersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryPersonService]
    });
  });

  it('should be created', inject([DeliveryPersonService], (service: DeliveryPersonService) => {
    expect(service).toBeTruthy();
  }));
});
