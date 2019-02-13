import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFormsComponent } from './model-driven-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ModelDrivenFormsComponent', () => {
  let component: ModelDrivenFormsComponent;
  let fixture: ComponentFixture<ModelDrivenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ModelDrivenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
