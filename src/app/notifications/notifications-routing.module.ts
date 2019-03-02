import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const notificationsRoutes: Routes = [
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(notificationsRoutes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
