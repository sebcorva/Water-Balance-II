import { TestBed } from '@angular/core/testing';

import { DataBaseService } from './data-base.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

class MockSQLite {
  openDatabase() {
    return Promise.resolve({});
  }
}

describe('DataBaseService', () => {
  let service: DataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataBaseService, 
        { provide: SQLite, useClass: MockSQLite }
      ]
    });
    service = TestBed.inject(DataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
