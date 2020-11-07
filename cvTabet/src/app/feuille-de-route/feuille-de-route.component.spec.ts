import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleDeRouteComponent } from './feuille-de-route.component';

describe('FeuilleDeRouteComponent', () => {
  let component: FeuilleDeRouteComponent;
  let fixture: ComponentFixture<FeuilleDeRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeuilleDeRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuilleDeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
