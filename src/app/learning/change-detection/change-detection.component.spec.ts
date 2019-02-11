import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionComponent } from './change-detection.component';
import { AuthService } from '../auth.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ChangeDetectionComponent', () => {
  let component: ChangeDetectionComponent;
  let authService: AuthService;
  let el: DebugElement;
  let fixture: ComponentFixture<ChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionComponent ],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    el = fixture.debugElement.query(By.css('a'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('logout Button is shown when the user is logged in', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });
  // statement
  it('login Button is shown when the user is logged out', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
  });
});
