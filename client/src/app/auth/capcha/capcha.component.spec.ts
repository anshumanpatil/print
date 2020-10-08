import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapchaComponent } from './capcha.component';

describe('CapchaComponent', () => {
  let component: CapchaComponent;
  let fixture: ComponentFixture<CapchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
