import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteteDuCvComponent } from './entete-du-cv.component';

describe('EnteteDuCvComponent', () => {
  let component: EnteteDuCvComponent;
  let fixture: ComponentFixture<EnteteDuCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnteteDuCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteteDuCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
