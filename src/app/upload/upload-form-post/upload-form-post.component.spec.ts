import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFormPostComponent } from './upload-form-post.component';

describe('UploadFormPostComponent', () => {
  let component: UploadFormPostComponent;
  let fixture: ComponentFixture<UploadFormPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFormPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFormPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
