import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from 'src/environments/environment';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FileSizePipe } from './file-size.pipe';
import { ServiceTestComponent } from './services/service-test/service-test.component';

@NgModule({
  declarations: [
    AuthentificationComponent,
    PageNotFoundComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe,
    ServiceTestComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireStorageModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, () => 'leftlife',
    {
      enableFirestoreSync: true, // enable/disable autosync users with firestore
      toastMessageOnAuthSuccess: true, // whether to open/show a snackbar message on auth success - default : true
      toastMessageOnAuthError: true // whether to open/show a snackbar message on auth error - default : true
    }),
    AppRoutingModule
  ],
  exports: [
    AuthentificationComponent,
    NgxAuthFirebaseUIModule,
    DropZoneDirective,
    FileSizePipe,
    FileUploadComponent,
    ServiceTestComponent
  ]
})
export class CoreModule { }
