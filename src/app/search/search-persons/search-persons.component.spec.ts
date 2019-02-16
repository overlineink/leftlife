import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPersonsComponent } from './search-persons.component';

describe('SearchPersonsComponent', () => {
  let component: SearchPersonsComponent;
  let fixture: ComponentFixture<SearchPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
