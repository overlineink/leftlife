import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFaceNoLocComponent } from './header-face-no-loc.component';

describe('HeaderFaceNoLocComponent', () => {
  let component: HeaderFaceNoLocComponent;
  let fixture: ComponentFixture<HeaderFaceNoLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFaceNoLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFaceNoLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
