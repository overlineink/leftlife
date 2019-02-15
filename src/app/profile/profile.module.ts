import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ProfileModule { }
