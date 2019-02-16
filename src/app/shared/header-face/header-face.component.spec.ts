import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFaceComponent } from './header-face.component';

describe('HeaderFaceComponent', () => {
  let component: HeaderFaceComponent;
  let fixture: ComponentFixture<HeaderFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
