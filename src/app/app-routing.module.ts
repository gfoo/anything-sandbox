import { ProjetllComponent } from "./views/projetll/projetll.component";
import { ProjetComponent } from './views/projet/projet.component';
import { EditionComponent } from './views/edition/edition.component';
import { ThingsComponent } from './views/things/things.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './views/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { SettingsComponent } from './views/settings/settings.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { SearchesComponent } from './views/searches/searches.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projetll', component: ProjetllComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'things', component: ThingsComponent },
  { path: 'searches', component: SearchesComponent },
  { path: 'edition', component: EditionComponent },
  { path: 'projects', component: ProjetComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' }
  },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
