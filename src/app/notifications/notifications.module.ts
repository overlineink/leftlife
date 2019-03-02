import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../search/search.module';
import { NotificationsCardComponent } from './notifications-card/notifications-card.component';

@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationsCardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    SearchModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
