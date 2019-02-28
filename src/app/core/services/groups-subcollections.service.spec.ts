import { TestBed } from '@angular/core/testing';

import { GroupsSubcollectionsService } from './groups-subcollections.service';

describe('GroupsSubcollectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupsSubcollectionsService = TestBed.get(GroupsSubcollectionsService);
    expect(service).toBeTruthy();
  });
});
