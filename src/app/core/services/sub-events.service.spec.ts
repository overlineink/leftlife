import { TestBed } from '@angular/core/testing';

import { SubEventsService } from './sub-events.service';

describe('SubEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubEventsService = TestBed.get(SubEventsService);
    expect(service).toBeTruthy();
  });
});
