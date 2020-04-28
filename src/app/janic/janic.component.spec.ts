import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanicComponent } from './janic.component';

describe('JanicComponent', () => {
  let component: JanicComponent;
  let fixture: ComponentFixture<JanicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
