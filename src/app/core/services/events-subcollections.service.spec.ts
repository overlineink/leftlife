import { TestBed } from '@angular/core/testing';

import { EventsSubcollectionsService } from './events-subcollections.service';

describe('EventsSubcollectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsSubcollectionsService = TestBed.get(EventsSubcollectionsService);
    expect(service).toBeTruthy();
  });
});
