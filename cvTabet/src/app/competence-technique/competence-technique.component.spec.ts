import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceTechniqueComponent } from './competence-technique.component';

describe('CompetenceTechniqueComponent', () => {
  let component: CompetenceTechniqueComponent;
  let fixture: ComponentFixture<CompetenceTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
