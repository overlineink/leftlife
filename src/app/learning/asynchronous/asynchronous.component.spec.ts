import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AsynchronousComponent } from './asynchronous.component';
import { AuthService } from '../auth.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { doesNotThrow } from 'assert';
import { tick } from '@angular/core/src/render3';

describe('AsynchronousComponent', () => {
  let component: AsynchronousComponent;
  let fixture: ComponentFixture<AsynchronousComponent>;
  let authService: AuthService;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsynchronousComponent ],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynchronousComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    el = fixture.debugElement.query(By.css('a'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // using karma done function
  xit('logout Button should be shown when user is logged in', (done) => {
    const spy = spyOn(authService, 'getItem').and.returnValue(Promise.resolve(true));
    component.ngOnInit();

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
      expect(component.needsLogin).toBe(false);
      done();
    });
  });

  // using karma done function
  xit('login button should be shown when user is logged out', (done) => {
    const spy = spyOn(authService, 'getItem').and.returnValue(Promise.resolve(false));
    component.ngOnInit();

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(component.needsLogin).toBe(true);
      expect(el.nativeElement.textContent.trim()).toBe('Login');
      done();
    });
  });

  // using angular async --recommented
  xit('logout Button should be shown when user is logged in', async(() => {
    const spy = spyOn(authService, 'getItem').and.returnValue(Promise.resolve(true));
    component.ngOnInit();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
      expect(component.needsLogin).toBe(false);
    });
  }));

  // using angular async --recommented
  xit('login button should be shown when user is logged out', async(() => {
    const spy = spyOn(authService, 'getItem').and.returnValue(Promise.resolve(false));
    component.ngOnInit();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.needsLogin).toBe(true);
      expect(el.nativeElement.textContent.trim()).toBe('Login');
    });
  }));

    // using angular FakeAsync --recommented
    it('logout Button should be shown when user is logged in', fakeAsync(() => {
      const spy = spyOn(authService, 'getItem').and.returnValue(Promise.resolve(true));
      component.ngOnInit();
      tick(500);
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
      expect(component.needsLogin).toBe(false);
    }));

    // using angular FakeAsync --recommented
    it('login button should be shown when user is logged out', fakeAsync(() => {
      const spy = spyOn(authService, 'getItem').and.returnValue(Promise.resolve(false));
      component.ngOnInit();
      tick(500);
      fixture.detectChanges();
      expect(component.needsLogin).toBe(true);
      expect(el.nativeElement.textContent.trim()).toBe('Login');
    }));
});
