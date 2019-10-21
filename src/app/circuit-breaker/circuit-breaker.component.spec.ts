import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitBreakerComponent } from './circuit-breaker.component';

describe('CircuitBreakerComponent', () => {
  let component: CircuitBreakerComponent;
  let fixture: ComponentFixture<CircuitBreakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitBreakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitBreakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
