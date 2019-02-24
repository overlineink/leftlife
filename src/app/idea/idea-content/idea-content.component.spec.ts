import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaContentComponent } from './idea-content.component';

describe('IdeaContentComponent', () => {
  let component: IdeaContentComponent;
  let fixture: ComponentFixture<IdeaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
