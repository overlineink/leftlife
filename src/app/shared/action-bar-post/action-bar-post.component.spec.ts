import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBarPostComponent } from './action-bar-post.component';

describe('ActionBarPostComponent', () => {
  let component: ActionBarPostComponent;
  let fixture: ComponentFixture<ActionBarPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionBarPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionBarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
