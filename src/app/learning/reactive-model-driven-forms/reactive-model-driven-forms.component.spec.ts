import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveModelDrivenFormsComponent } from './reactive-model-driven-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ReactiveModelDrivenFormsComponent', () => {
  let component: ReactiveModelDrivenFormsComponent;
  let fixture: ComponentFixture<ReactiveModelDrivenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ReactiveModelDrivenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveModelDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
