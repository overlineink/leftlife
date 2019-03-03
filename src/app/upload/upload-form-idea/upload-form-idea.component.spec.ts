import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFormIdeaComponent } from './upload-form-idea.component';

describe('UploadFormIdeaComponent', () => {
  let component: UploadFormIdeaComponent;
  let fixture: ComponentFixture<UploadFormIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFormIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFormIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
