import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'editprofile',
    component: ProfileEditComponent,
    // canActivate: [LoggedInGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
