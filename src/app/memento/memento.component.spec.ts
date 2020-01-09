import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MementoComponent } from './memento.component';

describe('MementoComponent', () => {
  let component: MementoComponent;
  let fixture: ComponentFixture<MementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
