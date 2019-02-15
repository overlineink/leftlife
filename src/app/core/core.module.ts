import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from 'src/environments/environment';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AuthentificationComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase)
  ],
  exports: [
    AuthentificationComponent,
    NgxAuthFirebaseUIModule
  ]
})
export class CoreModule { }
