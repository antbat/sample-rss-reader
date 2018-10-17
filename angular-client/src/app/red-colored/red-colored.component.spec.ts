import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedColoredComponent } from './red-colored.component';

describe('RedColoredComponent', () => {
  let component: RedColoredComponent;
  let fixture: ComponentFixture<RedColoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedColoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
