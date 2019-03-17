import { TestBed } from '@angular/core/testing';

import { UploadIdeaService } from './upload-idea.service';

describe('UploadIdeaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadIdeaService = TestBed.get(UploadIdeaService);
    expect(service).toBeTruthy();
  });
});
