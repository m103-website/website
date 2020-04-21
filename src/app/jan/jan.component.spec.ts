import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanComponent } from './jan.component';

describe('JanComponent', () => {
  let component: JanComponent;
  let fixture: ComponentFixture<JanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
