import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './../../app-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsComponent } from './things.component';
import { BackendService } from '../../services/backend.service';

describe('ThingsComponent', () => {
  let component: ThingsComponent;
  let fixture: ComponentFixture<ThingsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
        declarations: [ThingsComponent],
        providers: [
          {
            provide: BackendService,
            useClass: class BackendServiceMockup {
              // add fake methods if required by tests
            }
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
