import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

const chatRoutes: Routes = [
  {
    path: 'chat',
    component: ChatComponent,
    // canActivate: [LoggedInGuard]
  },
  {
    path: 'chatdetail',
    component: ChatRoomComponent,
    // canActivate: [LoggedInGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
