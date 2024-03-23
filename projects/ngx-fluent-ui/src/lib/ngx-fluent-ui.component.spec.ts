import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFluentUiComponent } from './ngx-fluent-ui.component';

describe('NgxFluentUiComponent', () => {
  let component: NgxFluentUiComponent;
  let fixture: ComponentFixture<NgxFluentUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxFluentUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxFluentUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
