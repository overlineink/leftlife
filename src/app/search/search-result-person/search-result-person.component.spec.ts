import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultPersonComponent } from './search-result-person.component';

describe('SearchResultPersonComponent', () => {
  let component: SearchResultPersonComponent;
  let fixture: ComponentFixture<SearchResultPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
