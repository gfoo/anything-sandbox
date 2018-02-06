import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { ToolbarComponent } from './views/toolbar/toolbar.component';
import { SigninComponent } from './views/signin/signin.component';
import { AuthService } from './services/auth.service';
import { SettingsComponent } from './views/settings/settings.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { BackendService } from './services/backend.service';
import { ThingsComponent } from './views/things/things.component';
import { SearchesComponent } from './views/searches/searches.component';
import { FooterComponent } from './views/footer/footer.component';
import { EditionComponent } from './views/edition/edition.component';
import { ProjetComponent } from './views/projet/projet.component';
import { ProjetllComponent } from './views/projetll/projetll.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    SigninComponent,
    SettingsComponent,
    ErrorPageComponent,
    ThingsComponent,
    SearchesComponent,
    FooterComponent,
    EditionComponent,
    ProjetComponent,
    ProjetllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
