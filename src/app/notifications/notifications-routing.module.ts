import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';

const notificationsRoutes: Routes = [
  {
    path: 'notifications',
    component: NotificationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(notificationsRoutes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
