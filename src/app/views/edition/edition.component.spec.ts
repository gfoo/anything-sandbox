import { AppMaterialModule } from './../../app-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionComponent } from './edition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditionComponent', () => {
  let component: EditionComponent;
  let fixture: ComponentFixture<EditionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
        declarations: [EditionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
