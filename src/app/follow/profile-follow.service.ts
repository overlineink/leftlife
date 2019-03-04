import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private angularFirestore: AngularFirestore) { }

  getFollowerCollection(parentID: string): Observable<FollowID[]> {
    // gets the follower collection
    this.followerCollection = this.angularFirestore.collection<Follow>(`users/${parentID}/follower`);
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
}
