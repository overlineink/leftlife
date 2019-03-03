import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';

const uploadRoutes: Routes = [
  {
    path: 'upload',
    component: UploadComponent,
    // canActivate: [LoggedInGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(uploadRoutes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
