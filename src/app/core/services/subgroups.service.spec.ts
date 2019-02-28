import { TestBed } from '@angular/core/testing';

import { SubgroupsService } from './subgroups.service';

describe('SubgroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubgroupsService = TestBed.get(SubgroupsService);
    expect(service).toBeTruthy();
  });
});
