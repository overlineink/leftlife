import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaHeaderComponent } from './idea-header.component';

describe('IdeaHeaderComponent', () => {
  let component: IdeaHeaderComponent;
  let fixture: ComponentFixture<IdeaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
