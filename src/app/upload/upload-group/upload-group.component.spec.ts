import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGroupComponent } from './upload-group.component';

describe('UploadGroupComponent', () => {
  let component: UploadGroupComponent;
  let fixture: ComponentFixture<UploadGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
