import { TestBed } from '@angular/core/testing';

import { ProfileFollowService } from './profile-follow.service';

describe('ProfileFollowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileFollowService = TestBed.get(ProfileFollowService);
    expect(service).toBeTruthy();
  });
});
