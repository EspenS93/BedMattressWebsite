/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BedChooserService } from './bed-chooser.service';

describe('BedChooserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BedChooserService]
    });
  });

  it('should ...', inject([BedChooserService], (service: BedChooserService) => {
    expect(service).toBeTruthy();
  }));
});
