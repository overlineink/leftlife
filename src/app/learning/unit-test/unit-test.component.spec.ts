import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestComponent } from './unit-test.component';
import { expressionType } from '@angular/compiler/src/output/output_ast';

describe('UnitTestComponent', () => {
  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run firstTest and return 0 if input is negative', () => {
    // call function with a negative number
    const result = component.firstTest(-1);
    expect(result).toBe(0);

  });

  it ('should run firstTest and return input + 1', () => {
    const positveNumber = 4;
    const positiveResult = component.firstTest(positveNumber);
    expect(positiveResult).toBe(positveNumber + 1);
  });
});
