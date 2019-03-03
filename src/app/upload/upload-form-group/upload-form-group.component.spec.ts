import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFormGroupComponent } from './upload-form-group.component';

describe('UploadFormGroupComponent', () => {
  let component: UploadFormGroupComponent;
  let fixture: ComponentFixture<UploadFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
