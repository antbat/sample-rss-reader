import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowColoredComponent } from './yellow-colored.component';

describe('YellowColoredComponent', () => {
  let component: YellowColoredComponent;
  let fixture: ComponentFixture<YellowColoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowColoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
