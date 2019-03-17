import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload/upload.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { UploadHeaderComponent } from './upload-header/upload-header.component';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';

import { UploadFormGroupComponent } from './upload-form-group/upload-form-group.component';
import { UploadFormIdeaComponent } from './upload-form-idea/upload-form-idea.component';
import { UploadFormPostComponent } from './upload-form-post/upload-form-post.component';

@NgModule({
  declarations: [
    UploadComponent,
    UploadHeaderComponent,
    UploadDialogComponent,
    UploadFormGroupComponent,
    UploadFormIdeaComponent,
    UploadFormPostComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    UploadRoutingModule
  ],
  exports: [
    UploadComponent,
  ]
})
export class UploadModule { }
