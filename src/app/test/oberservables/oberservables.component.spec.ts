import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OberservablesComponent } from './oberservables.component';

describe('OberservablesComponent', () => {
  let component: OberservablesComponent;
  let fixture: ComponentFixture<OberservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OberservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OberservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
