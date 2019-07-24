import { TestBed } from '@angular/core/testing';

import { DataframeService } from './dataframe.service';

describe('DataframeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataframeService = TestBed.get(DataframeService);
    expect(service).toBeTruthy();
  });
});
