import { TestBed } from '@angular/core/testing';

import { UploadGroupService } from './upload-group.service';

describe('UploadGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadGroupService = TestBed.get(UploadGroupService);
    expect(service).toBeTruthy();
  });
});
