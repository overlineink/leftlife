import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWikiSubgroupsComponent } from './group-wiki-subgroups.component';

describe('GroupWikiSubgroupsComponent', () => {
  let component: GroupWikiSubgroupsComponent;
  let fixture: ComponentFixture<GroupWikiSubgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupWikiSubgroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWikiSubgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
