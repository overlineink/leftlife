import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWikiGridComponent } from './group-wiki-grid.component';

describe('GroupWikiGridComponent', () => {
  let component: GroupWikiGridComponent;
  let fixture: ComponentFixture<GroupWikiGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupWikiGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWikiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
