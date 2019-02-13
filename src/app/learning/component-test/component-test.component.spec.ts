import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTestComponent, User } from './component-test.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ComponentTestComponent', () => {
  let component: ComponentTestComponent;
  let fixture: ComponentFixture<ComponentTestComponent>;
  let loginEl: DebugElement;
  let submitEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTestComponent);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing Input of components
  it('Setting enabled to false disables the login button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
    component.enabled = true;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeFalsy();
  });

  // Testing Output of components
  it('Entering email and password emits loggedIn event', () => {
    let user: User;
    loginEl.nativeElement.value = 'test@example.com';
    passwordEl.nativeElement.value = '123456';
    component.loggedIn.subscribe((value) => user = value);
    submitEl.triggerEventHandler('click', null);

    expect(user.email).toBe('test@example.com');
    expect(user.password).toBe('123456');
  });

  // Testing Output of components
});
