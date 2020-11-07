import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueDesChangementsComponent } from './historique-des-changements.component';

describe('HistoriqueDesChangementsComponent', () => {
  let component: HistoriqueDesChangementsComponent;
  let fixture: ComponentFixture<HistoriqueDesChangementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueDesChangementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueDesChangementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
