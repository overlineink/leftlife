import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FollowID, Follow } from './follow.model';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileFollowService {
  /*
    Display a follower counter of a user
    => OnClick displays all followers in a list
    User attribute: followersTot
    SubCollections: Followers
    Cloud Function() => updates userAttributes if subcollection Followers gets decreased/increased

    Display a folling counter of a user
    => OnClick displays all followings in a list
    User attribute: followingTot
    SubCollections: Following
    Cloud Function() => updates userAttribute if subcollection Following gets decreased/increased
  */

  // 1. get the userFollowerTot

  // 2. checks if logged in User followers current profile

  // 3. Unfollows or Follows depending on 2

  // 4. Cloudfunction which updates userFollowerTot

  private followerCollection: AngularFirestoreCollection<Follow>;
  followerCollection$: Observable<FollowID[]>;

  followerDoc: AngularFirestoreDocument<Follow>;
  follower$: Observable<Follow>;

  followState: boolean;

  constructor(private angularFirestore: AngularFirestore) { }

  getFollowerCollection(parentID: string): Observable<FollowID[]> {
    // gets the follower collection
    this.followerCollection = this.angularFirestore.collection<Follow>(`users/${parentID}/following`);
    // gets the follower collection and an aditional id
    this.followerCollection$ = this.followerCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Follow;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
    return this.followerCollection$;
   }


   // Gets a single group document based on an ID
   getFollow(
     followingID: string,
     followerID: string): Observable<Follow> {
    this.followerDoc = this.angularFirestore.doc(`users/${followingID}/following/${followerID}`);
    return this.follower$ = this.followerDoc.valueChanges();
   }

  // checks if user already follows
  async checkFollow(followingID: string, followerID: string): Promise<Boolean> {
    const followDoc =
    this.angularFirestore.collection(`users/${followingID}/following`).doc(followerID).ref;

    return followDoc.get().then((doc) => {
      if (doc.exists) {
          this.followState = true;
      } else {
          this.followState = false;
      }
      return this.followState;
    }).catch(function(error) {
      console.log('Error getting document:', error);
      return this.followState = false;
    });
  }

  confirmFollow() {
    this.followState = true;
  }

  rejectFollow() {
    this.followState = true;
  }

  // adds a follower to a subcollection of a certain user
  addFollow(
    followingID: string,

    followerID: string,
    followerName: string,
    followerImage: string,
  ) {
    const followCollection = this.angularFirestore.collection<Follow>(`users/${followingID}/following`);
    followCollection.doc(followerID).set({
      followName: followerName,
      followImage: followerImage
   });
  }

  // deletes a follower of a certain user
  deleteFollow(
    followingID: string,
    followerID: string
  ) {
    const followCollection = this.angularFirestore.collection<Follow>(`users/${followingID}/following`);
    followCollection.doc(followerID).delete().then(function() {
      console.log('Document successfully deleted!');
  }).catch(function(error) {
      console.error('Error removing document: ', error);
  });
  }
}
