import { AppMaterialModule } from './../../app-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchesComponent } from './searches.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackendService } from '../../services/backend.service';

describe('SearchesComponent', () => {
  let component: SearchesComponent;
  let fixture: ComponentFixture<SearchesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
        declarations: [SearchesComponent],
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
    fixture = TestBed.createComponent(SearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
