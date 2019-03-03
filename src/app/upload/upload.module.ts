import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload/upload.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { UploadHeaderComponent } from './upload-header/upload-header.component';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { UploadIdeaComponent } from './upload-idea/upload-idea.component';
import { UploadGroupComponent } from './upload-group/upload-group.component';
import { UploadPostComponent } from './upload-post/upload-post.component';

@NgModule({
  declarations: [
    UploadComponent,
    UploadHeaderComponent,
    UploadDialogComponent,
    UploadIdeaComponent,
    UploadGroupComponent,
    UploadPostComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    UploadRoutingModule
  ],
  exports: [
    UploadComponent
  ]
})
export class UploadModule { }
