import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarBotOutComponent } from './bar-bot-out.component';

describe('BarBotOutComponent', () => {
  let component: BarBotOutComponent;
  let fixture: ComponentFixture<BarBotOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarBotOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarBotOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
