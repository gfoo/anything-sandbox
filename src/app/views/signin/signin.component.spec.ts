import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './../../app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';
import { AppMaterialModule } from '../../app-material.module';
import { AuthService } from '../../services/auth.service';
import { BackendService } from './../../services/backend.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SigninComponent],
        imports: [
          AppMaterialModule,
          HttpClientTestingModule,
          RouterTestingModule,
          BrowserAnimationsModule,
          FormsModule
              ],
        providers: [AuthService, BackendService]
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
