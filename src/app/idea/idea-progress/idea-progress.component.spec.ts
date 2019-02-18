import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaProgressComponent } from './idea-progress.component';

describe('IdeaProgressComponent', () => {
  let component: IdeaProgressComponent;
  let fixture: ComponentFixture<IdeaProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
