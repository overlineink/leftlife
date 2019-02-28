import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [
    NotificationsComponent
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
