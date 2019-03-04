import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '@profile/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  user: User;
  userID: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
  ) {}
  // gets the user document. Needs to be called before get userID()
  getUser(): any { // don´t understand what gets returned. Shouldn't it return a Observable<User>?
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
  // subscribes to the logged in User$ document fetched by getUser and saves the UserID
  // after some time (why? when?) I can use the user and the userID property
  // when I called getUser and getUserID during ngInit
  // Call authService.user.attribute (authService.user.email) when you want to use it in functions
  // but I don´t understand when and why. I can not assign the values to a proberty of a component
  getUserID() { // don´t understand what gets returned. Shouldn't it return a User object?
    // console.log('I am ' + this.user$);
    this.angularFireAuth.authState.subscribe(user$ => {
      if (user$) {
        this.userID = user$.uid;
        this.user = user$;
        console.log(this.user);
        console.log('saved id: ' + this.userID);
        return this.user;
      } else {
      }
    });
  }

  updateUser(data: any) {
    this.angularFirestore.doc<User>(`users/${this.userID}`).update(data);
  }

}
