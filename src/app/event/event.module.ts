import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { SharedModule } from '../shared/shared.module';
import { EventHeaderComponent } from './event-header/event-header.component';
import { EventContentComponent } from './event-content/event-content.component';
import { EventRoutingModule } from './event-routing.module';
import { EventGridComponent } from './event-grid/event-grid.component';
import { TopicTasksComponent } from './topic-tasks/topic-tasks.component';

@NgModule({
  declarations: [
    EventComponent,
    EventHeaderComponent,
    EventContentComponent,
    EventGridComponent,
    TopicTasksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommonModule,
    EventRoutingModule
  ],
  exports: [
    EventComponent,
    EventGridComponent
  ]
})
export class EventModule { }
