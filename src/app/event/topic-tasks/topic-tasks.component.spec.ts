import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicTasksComponent } from './topic-tasks.component';

describe('TopicTasksComponent', () => {
  let component: TopicTasksComponent;
  let fixture: ComponentFixture<TopicTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
