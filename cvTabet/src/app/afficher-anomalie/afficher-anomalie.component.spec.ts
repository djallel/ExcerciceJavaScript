import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherAnomalieComponent } from './afficher-anomalie.component';

describe('AfficherAnomalieComponent', () => {
  let component: AfficherAnomalieComponent;
  let fixture: ComponentFixture<AfficherAnomalieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherAnomalieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherAnomalieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
