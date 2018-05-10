import { TestBed, inject } from '@angular/core/testing';

import { HearthsoneCardsService } from './hearthsone-cards.service';

describe('HearthsoneCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HearthsoneCardsService]
    });
  });

  it('should be created', inject([HearthsoneCardsService], (service: HearthsoneCardsService) => {
    expect(service).toBeTruthy();
  }));
});
