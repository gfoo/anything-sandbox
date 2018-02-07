import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Actus2Component } from './actus2.component';

describe('Actus2Component', () => {
  let component: Actus2Component;
  let fixture: ComponentFixture<Actus2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Actus2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Actus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
