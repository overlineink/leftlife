import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile/profile.component';
import { AuthentificationComponent } from './core/authentification/authentification.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoggedInGuard } from 'ngx-auth-firebaseui';
import { TestSharedComponent } from './shared/test-shared/test-shared.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { SearchComponent } from './search/search/search.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [LoggedInGuard]
  },
  {
    path: 'editprofile',
    component: ProfileEditComponent,
    // canActivate: [LoggedInGuard]
  },
  {
    path: 'search',
    component: SearchComponent,
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
    path: 'test',
    component: TestSharedComponent
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
