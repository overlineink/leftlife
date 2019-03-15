import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    FormsModule
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule { }
