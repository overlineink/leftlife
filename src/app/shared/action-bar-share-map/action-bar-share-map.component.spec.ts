import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBarShareMapComponent } from './action-bar-share-map.component';

describe('ActionBarShareMapComponent', () => {
  let component: ActionBarShareMapComponent;
  let fixture: ComponentFixture<ActionBarShareMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionBarShareMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionBarShareMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
