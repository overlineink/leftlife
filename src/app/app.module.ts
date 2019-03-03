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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from '@environments/environment';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropZoneDirective } from './drop-zone.directive';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FileSizePipe } from './file-size.pipe';
import { ServiceTestComponent } from './service-test/service-test.component';
import { PostModule } from './post/post.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthentificationComponent,
    PageNotFoundComponent,
    DropZoneDirective,
    FileSizePipe,
    ServiceTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireStorageModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, () => 'leftlife',
    {
      enableFirestoreSync: true, // enable/disable autosync users with firestore
      toastMessageOnAuthSuccess: true, // whether to open/show a snackbar message on auth success - default : true
      toastMessageOnAuthError: true // whether to open/show a snackbar message on auth error - default : true
    }),
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
    PostModule,
    EventModule,
    NotificationsModule,
    AppRoutingModule
  ],
  exports: [
    AuthentificationComponent,
    DropZoneDirective,
    FileSizePipe,
    ServiceTestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
