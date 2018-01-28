import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ToolbarComponent } from './toolbar.component';
import { AppMaterialModule } from '../../app-material.module';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserModel } from '../../models/user.model';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ToolbarComponent],
        imports: [AppMaterialModule],
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
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
