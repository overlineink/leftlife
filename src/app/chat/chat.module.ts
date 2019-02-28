import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat/chat.component';
import { SearchModule } from '../search/search.module';
import { ChatRoomComponent } from './chat-room/chat-room.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChatRoomComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    SearchModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
