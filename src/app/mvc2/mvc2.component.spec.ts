import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mvc2Component } from './mvc2.component';

describe('Mvc2Component', () => {
  let component: Mvc2Component;
  let fixture: ComponentFixture<Mvc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mvc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mvc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
