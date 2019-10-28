import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopCountComponent } from './loop-count.component';

describe('LoopCountComponent', () => {
  let component: LoopCountComponent;
  let fixture: ComponentFixture<LoopCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
