import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginloginComponent } from './loginlogin.component';

describe('LoginloginComponent', () => {
  let component: LoginloginComponent;
  let fixture: ComponentFixture<LoginloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
