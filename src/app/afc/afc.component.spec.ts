import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfcComponent } from './afc.component';

describe('AfcComponent', () => {
  let component: AfcComponent;
  let fixture: ComponentFixture<AfcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
