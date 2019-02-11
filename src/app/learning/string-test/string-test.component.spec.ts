import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringTestComponent } from './string-test.component';

describe('StringTestComponent', () => {
  let component: StringTestComponent;
  let fixture: ComponentFixture<StringTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run stringTest and include Welcome + given name', () => {
    const result = component.stringTest('Tobi');
    expect(result).toContain('Welcome Tobi');
  });

  it('should run arrayTest and return EUR currency', () => {
    const result = component.arrayTest();
    expect(result).toContain('EUR');
  });
});
