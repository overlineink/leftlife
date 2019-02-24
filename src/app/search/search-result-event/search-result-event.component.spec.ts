import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultEventComponent } from './search-result-event.component';

describe('SearchResultEventComponent', () => {
  let component: SearchResultEventComponent;
  let fixture: ComponentFixture<SearchResultEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
