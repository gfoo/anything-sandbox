import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ErrorPageComponent } from './error-page.component';
import { AppRoutingModule } from '../../app-routing.module';
import { Observable } from 'rxjs/Observable';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ErrorPageComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              data: Observable.of({})
              // add fake values if required by tests
            }
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
