import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueColoredComponent } from './blue-colored.component';

describe('BlueColoredComponent', () => {
  let component: BlueColoredComponent;
  let fixture: ComponentFixture<BlueColoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueColoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
