import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowStatsComponent } from './follow-stats.component';

describe('FollowStatsComponent', () => {
  let component: FollowStatsComponent;
  let fixture: ComponentFixture<FollowStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
