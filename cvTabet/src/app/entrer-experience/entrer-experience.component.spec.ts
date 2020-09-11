import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrerExperienceComponent } from './entrer-experience.component';

describe('EntrerExperienceComponent', () => {
  let component: EntrerExperienceComponent;
  let fixture: ComponentFixture<EntrerExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrerExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrerExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
