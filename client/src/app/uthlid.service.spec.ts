/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UthlidService } from './uthlid.service';

describe('UthlidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UthlidService]
    });
  });

  it('should ...', inject([UthlidService], (service: UthlidService) => {
    expect(service).toBeTruthy();
  }));
});
