import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat/chat.component';
import { SearchModule } from '../search/search.module';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatCardComponent } from './chat-card/chat-card.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChatRoomComponent,
    ChatCardComponent,
    ChatMessageComponent,
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
