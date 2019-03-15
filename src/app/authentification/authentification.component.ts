import { Component, OnInit, Output } from '@angular/core';
import {AuthProvider, Theme} from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { User } from '@profile/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  themes = Theme;
  providers = AuthProvider;
  messageOnSuccess = 'Welcome at leftlife';

  printError(): void {
  }

  constructor(
    private router: Router,
    public afs: AngularFirestore) { }

  ngOnInit() {
    // this.router.navigateByUrl('/profile');
  }

  onSuccess(user) {
    this.router.navigateByUrl('/profile');
    // custom user data is not support on ngx firebase auth
/*
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,

      // set custom data
      local: user.local,
    };

    return userRef.set(data, { merge: true }); */
  }

}
