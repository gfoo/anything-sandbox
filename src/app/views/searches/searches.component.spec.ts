import { AppMaterialModule } from './../../app-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchesComponent } from './searches.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchesComponent', () => {
  let component: SearchesComponent;
  let fixture: ComponentFixture<SearchesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
        declarations: [SearchesComponent]
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
