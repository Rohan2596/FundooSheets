import { TestBed } from '@angular/core/testing';

import { DashboardBoxService } from './dashboard-box.service';

describe('DashboardBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardBoxService = TestBed.get(DashboardBoxService);
    expect(service).toBeTruthy();
  });
});
