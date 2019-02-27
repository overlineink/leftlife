import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaComponent } from './idea/idea.component';
import { IdeaVideoComponent } from './idea-video/idea-video.component';
import { IdeaContentComponent } from './idea-content/idea-content.component';
import { IdeaRoutingModule } from './idea-routing.module';
import { IdeaProgressComponent } from './idea-progress/idea-progress.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IdeaComponent,
    IdeaVideoComponent,
    IdeaContentComponent,
    IdeaProgressComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    IdeaRoutingModule
  ],
  exports: [
    IdeaComponent
  ]
})
export class IdeaModule { }
