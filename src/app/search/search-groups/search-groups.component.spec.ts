import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGroupsComponent } from './search-groups.component';

describe('SearchGroupsComponent', () => {
  let component: SearchGroupsComponent;
  let fixture: ComponentFixture<SearchGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
