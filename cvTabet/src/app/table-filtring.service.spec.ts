import { TestBed } from '@angular/core/testing';

import { TableFiltringService } from './table-filtring.service';

describe('TableFiltringService', () => {
  let service: TableFiltringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableFiltringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
