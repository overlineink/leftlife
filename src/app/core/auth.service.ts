import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '@profile/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  user: any;
  userID: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
  ) {}
  // gets the user document
  getUser(): any {
    this.user$ = this.angularFireAuth.authState.pipe(
      switchMap(user => {
        // if Logged in
        if (user) {
          // returns user doc of the logged in User
          return this.angularFirestore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // logged out
          return of(null);
        }
      })
    );
  }
  // subscribes to the logged in User$ and saves the UserID
  getUserID() {
    // console.log('I am ' + this.user$);
    this.angularFireAuth.authState.subscribe(user$ => {
      if (user$) {
        this.userID = user$.uid;
        this.user = user$;
        // console.log(this.user);
        // console.log('saved id: ' + this.userID);
      } else {
      }
    });
  }

  updateUser(data: any) {
    this.angularFirestore.doc<User>(`users/${this.userID}`).update(data);
  }

}
