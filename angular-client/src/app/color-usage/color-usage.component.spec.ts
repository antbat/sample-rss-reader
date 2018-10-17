import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorUsageComponent } from './color-usage.component';

describe('ColorUsageComponent', () => {
  let component: ColorUsageComponent;
  let fixture: ComponentFixture<ColorUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
