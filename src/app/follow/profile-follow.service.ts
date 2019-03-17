import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FollowID, Follow } from '@follow/follow.model';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileFollowService {
  followState: boolean;

  constructor(private angularFirestore: AngularFirestore) { }

  // checks if user already follows
  async checkFollow(followedUserID: string, followerID: string): Promise<Boolean> {

    const followDoc =
    this.angularFirestore.collection(`users/${followedUserID}/followers`).doc(followerID).ref;

    return followDoc.get().then((doc) => {
      if (doc.exists) {
        // exist
          this.followState = true;
      } else {
        // no doc
          this.followState = false;
      }
      return this.followState;
    }).catch(function(error) {
      console.log('Error getting document:', error);
      return this.followState = false;
    });
  }

  // adds a follower to a subcollection of a certain user
  addFollow(
    followedUserID: string,
    followedUserName: string,
    followedUserImage: string,

    followerID: string,
    followerName: string,
    followerImage: string,
  ) {
    const followCollection = this.angularFirestore.collection<Follow>(`users/${followedUserID}/followers`);

    followCollection.doc(followerID).set({
      followName: followerName,
      followImage: followerImage
    });

    const followingCollection = this.angularFirestore.collection<Follow>((`users/${followerID}/following`));

    followingCollection.doc(followedUserID).set({
      followedUserName: followedUserName,
      followedUserImage: followedUserImage
    });
  }

  // deletes a follower of a certain user
  deleteFollow(
    followedUserID: string,
    followerID: string
  ) {
    const followCollection = this.angularFirestore.collection<Follow>(`users/${followedUserID}/followers`);
    console.log('Delete Follower');
    followCollection.doc(followerID).delete();

    const followingCollection = this.angularFirestore.collection<Follow>((`users/${followerID}/following`));
    console.log('Delete Following');
    followingCollection.doc(followedUserID).delete();
  }


  /*
    private followerCollection: AngularFirestoreCollection<Follow>;

  followerCollection$: Observable<FollowID[]>;

  followerDoc: AngularFirestoreDocument<Follow>;
  follower$: Observable<Follow>;

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
     } */
}
