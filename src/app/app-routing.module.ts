import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './core/authentification/authentification.component';
import { LoggedInGuard } from 'ngx-auth-firebaseui';
import { TimelineComponent } from './timeline/timeline/timeline.component';
import { ServiceTestComponent } from './core/services/service-test/service-test.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'timeline',
    component: TimelineComponent,
    // canActivate: [LoggedInGuard]
  },
  {
    path: 'servicetest',
    component: ServiceTestComponent,
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
  }
  // Even AppRouting module is imported as the last module, the wildcard intercepted every Url and I
  // moved it to the last imported Module EventRoutingModule (don´t know how to fix this)
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
