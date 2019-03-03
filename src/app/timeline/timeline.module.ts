import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TimelineComponent
  ]
})
export class TimelineModule { }
