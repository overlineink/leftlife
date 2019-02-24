import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWikiContactComponent } from './group-wiki-contact.component';

describe('GroupWikiContactComponent', () => {
  let component: GroupWikiContactComponent;
  let fixture: ComponentFixture<GroupWikiContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupWikiContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWikiContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
