import { AppRoutingModule } from './../../app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SigninComponent } from './signin.component';
import { AppMaterialModule } from '../../app-material.module';
import { AuthService } from '../../services/auth.service';
import { BackendService } from './../../services/backend.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserModel } from '../../models/user.model';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SigninComponent],
        imports: [
          AppMaterialModule,
          BrowserAnimationsModule,
          FormsModule
        ],
        providers: [
          {
            provide: AuthService,
            useClass: class AuthServiceMockup {
              userEvents = new BehaviorSubject<UserModel>(undefined);
            }
          },
          {
            provide: Router,
            useClass: class RouterMockup {}
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
