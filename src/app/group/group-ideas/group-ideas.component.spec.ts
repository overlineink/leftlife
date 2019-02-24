import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIdeasComponent } from './group-ideas.component';

describe('GroupIdeasComponent', () => {
  let component: GroupIdeasComponent;
  let fixture: ComponentFixture<GroupIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
