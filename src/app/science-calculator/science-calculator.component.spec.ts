import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceCalculatorComponent } from './science-calculator.component';

describe('ScienceCalculatorComponent', () => {
  let component: ScienceCalculatorComponent;
  let fixture: ComponentFixture<ScienceCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
