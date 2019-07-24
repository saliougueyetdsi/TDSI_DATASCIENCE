import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressionLineaireComponent } from './regression-lineaire.component';

describe('RegressionLineaireComponent', () => {
  let component: RegressionLineaireComponent;
  let fixture: ComponentFixture<RegressionLineaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegressionLineaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegressionLineaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
