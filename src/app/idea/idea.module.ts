import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaComponent } from './idea/idea.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { IdeaProgressComponent } from './idea-progress/idea-progress.component';
import { IdeaVideoComponent } from './idea-video/idea-video.component';
import { IdeaContentComponent } from './idea-content/idea-content.component';

@NgModule({
  declarations: [
    IdeaComponent,
    IdeaProgressComponent,
    IdeaVideoComponent,
    IdeaContentComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    IdeaComponent,
  ]
})
export class IdeaModule { }
