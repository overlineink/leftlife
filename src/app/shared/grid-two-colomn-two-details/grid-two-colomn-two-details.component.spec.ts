import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTwoColomnTwoDetailsComponent } from './grid-two-colomn-two-details.component';

describe('GridTwoColomnTwoDetailsComponent', () => {
  let component: GridTwoColomnTwoDetailsComponent;
  let fixture: ComponentFixture<GridTwoColomnTwoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTwoColomnTwoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTwoColomnTwoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
