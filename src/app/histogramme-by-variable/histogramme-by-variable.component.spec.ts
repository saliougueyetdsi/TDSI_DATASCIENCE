import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogrammeByVariableComponent } from './histogramme-by-variable.component';

describe('HistogrammeByVariableComponent', () => {
  let component: HistogrammeByVariableComponent;
  let fixture: ComponentFixture<HistogrammeByVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistogrammeByVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistogrammeByVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
