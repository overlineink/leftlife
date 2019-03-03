import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadIdeaComponent } from './upload-idea.component';

describe('UploadIdeaComponent', () => {
  let component: UploadIdeaComponent;
  let fixture: ComponentFixture<UploadIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
