import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWikiHeaderComponent } from './group-wiki-header.component';

describe('GroupWikiHeaderComponent', () => {
  let component: GroupWikiHeaderComponent;
  let fixture: ComponentFixture<GroupWikiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupWikiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWikiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
