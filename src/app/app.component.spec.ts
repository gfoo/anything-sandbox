import { AuthService } from './services/auth.service';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './views/toolbar/toolbar.component';
import { AppMaterialModule } from './app-material.module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class AuthServiceMock {
  authenticate(credentials): Observable<any> {
    return Observable.of({
      email: 'test@test.com',
      token: 'token'
    });
  }

  logout() {}
}

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, ToolbarComponent],
        imports: [
          RouterTestingModule,
          AppMaterialModule,
          HttpClientTestingModule
        ],
        providers: [
          {
            provide: AuthService,
            useClass: class AuthServiceMockup {}
          }
        ]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  // it(`should have as title 'any'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('any');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to any!');
  // }));
});
