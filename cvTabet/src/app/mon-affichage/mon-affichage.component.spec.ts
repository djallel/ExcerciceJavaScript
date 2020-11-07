import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonAffichageComponent } from './mon-affichage.component';

describe('MonAffichageComponent', () => {
  let component: MonAffichageComponent;
  let fixture: ComponentFixture<MonAffichageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonAffichageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
