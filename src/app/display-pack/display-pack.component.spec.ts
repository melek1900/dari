import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPackComponent } from './display-pack.component';

describe('DisplayPackComponent', () => {
  let component: DisplayPackComponent;
  let fixture: ComponentFixture<DisplayPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
