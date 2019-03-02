import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const eventRoutes: Routes = [
  {
    path: 'event',
    component: EventComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(eventRoutes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
