import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaVideoComponent } from './idea-video.component';

describe('IdeaVideoComponent', () => {
  let component: IdeaVideoComponent;
  let fixture: ComponentFixture<IdeaVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
