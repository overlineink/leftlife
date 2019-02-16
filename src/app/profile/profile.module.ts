import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileFormComponent,
    ProfileEditComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class ProfileModule { }
