import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWikiComponent } from './group-wiki.component';

describe('GroupWikiComponent', () => {
  let component: GroupWikiComponent;
  let fixture: ComponentFixture<GroupWikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupWikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
