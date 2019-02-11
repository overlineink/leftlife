import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsConstructorComponent } from './obs-constructor.component';

describe('ObsConstructorComponent', () => {
  let component: ObsConstructorComponent;
  let fixture: ComponentFixture<ObsConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
