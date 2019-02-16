import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIdeasComponent } from './search-ideas.component';

describe('SearchIdeasComponent', () => {
  let component: SearchIdeasComponent;
  let fixture: ComponentFixture<SearchIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
