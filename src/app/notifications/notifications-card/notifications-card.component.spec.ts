import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsCardComponent } from './notifications-card.component';

describe('NotificationsCardComponent', () => {
  let component: NotificationsCardComponent;
  let fixture: ComponentFixture<NotificationsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
