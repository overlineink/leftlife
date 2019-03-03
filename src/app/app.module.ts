import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LearningModule } from './learning/learning.module';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './search/search.module';
import { TimelineModule } from './timeline/timeline.module';
import { IdeaModule } from './idea/idea.module';
import { EventModule } from './event/event.module';
import { GroupModule } from './group/group.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChatModule } from './chat/chat.module';
import { NotificationsModule } from './notifications/notifications.module';
import { UploadModule } from './upload/upload.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    LearningModule,
    SharedModule,
    ProfileModule,
    SearchModule,
    TimelineModule,
    IdeaModule,
    GroupModule,
    CoreModule,
    ChatModule,
    UploadModule,
    EventModule,
    NotificationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
