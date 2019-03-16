import { TestBed } from '@angular/core/testing';

import { UploadPostService } from './upload-post.service';

describe('UploadPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadPostService = TestBed.get(UploadPostService);
    expect(service).toBeTruthy();
  });
});
