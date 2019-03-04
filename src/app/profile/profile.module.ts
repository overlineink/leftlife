import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FollowModule } from 'app/follow/follow.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileFormComponent,
    ProfileEditComponent,
  ],
  imports: [
    CommonModule,
    NgxAuthFirebaseUIModule,
    SharedModule,
    FollowModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
