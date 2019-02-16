import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagsEditComponent } from './hashtags-edit.component';

describe('HashtagsEditComponent', () => {
  let component: HashtagsEditComponent;
  let fixture: ComponentFixture<HashtagsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
