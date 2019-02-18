import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBarShareComponent } from './action-bar-share.component';

describe('ActionBarShareComponent', () => {
  let component: ActionBarShareComponent;
  let fixture: ComponentFixture<ActionBarShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionBarShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionBarShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
