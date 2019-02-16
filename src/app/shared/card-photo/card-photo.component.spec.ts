import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPhotoComponent } from './card-photo.component';

describe('CardPhotoComponent', () => {
  let component: CardPhotoComponent;
  let fixture: ComponentFixture<CardPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
