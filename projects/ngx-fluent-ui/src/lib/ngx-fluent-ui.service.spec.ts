import { TestBed } from '@angular/core/testing';

import { NgxFluentUiService } from './ngx-fluent-ui.service';

describe('NgxFluentUiService', () => {
  let service: NgxFluentUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFluentUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
