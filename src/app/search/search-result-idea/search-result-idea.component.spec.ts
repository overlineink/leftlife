import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultIdeaComponent } from './search-result-idea.component';

describe('SearchResultIdeaComponent', () => {
  let component: SearchResultIdeaComponent;
  let fixture: ComponentFixture<SearchResultIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
