import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile/profile.component';
import { AuthentificationComponent } from './core/authentification/authentification.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoggedInGuard } from 'ngx-auth-firebaseui';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [LoggedInGuard]
  },
  {
    path: 'home',
    component: AuthentificationComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
