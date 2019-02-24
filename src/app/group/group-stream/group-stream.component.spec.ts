import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStreamComponent } from './group-stream.component';

describe('GroupStreamComponent', () => {
  let component: GroupStreamComponent;
  let fixture: ComponentFixture<GroupStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
