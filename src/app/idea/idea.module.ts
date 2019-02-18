import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaComponent } from './idea/idea.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { IdeaHeaderComponent } from './idea-header/idea-header.component';
import { IdeaProgressComponent } from './idea-progress/idea-progress.component';

@NgModule({
  declarations: [
    IdeaComponent,
    IdeaHeaderComponent,
    IdeaProgressComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    IdeaComponent,
    IdeaHeaderComponent,
    IdeaProgressComponent
  ]
})
export class IdeaModule { }
