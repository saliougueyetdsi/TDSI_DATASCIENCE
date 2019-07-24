import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogrammeComponent } from './histogramme.component';

describe('HistogrammeComponent', () => {
  let component: HistogrammeComponent;
  let fixture: ComponentFixture<HistogrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistogrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
