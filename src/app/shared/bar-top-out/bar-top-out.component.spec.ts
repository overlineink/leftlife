import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTopOutComponent } from './bar-top-out.component';

describe('BarTopOutComponent', () => {
  let component: BarTopOutComponent;
  let fixture: ComponentFixture<BarTopOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarTopOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTopOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
