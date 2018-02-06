import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetllComponent } from './projetll.component';

describe('ProjetllComponent', () => {
  let component: ProjetllComponent;
  let fixture: ComponentFixture<ProjetllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
