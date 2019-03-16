import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Group, GroupID } from './group.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '@core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private groupsCollection: AngularFirestoreCollection<Group>;
  groups$: Observable<GroupID[]>;

  groupDoc: AngularFirestoreDocument<Group>;
  group$: Observable<Group>;

  constructor(
    private readonly angularFirestore: AngularFirestore,
    private authService: AuthService
  ) { }

   getGroups(): Observable<GroupID[]> {
    // gets the groups collection
    this.groupsCollection = this.angularFirestore.collection<Group>('groups');
    // gets the groups and an aditional id
    this.groups$ = this.groupsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Group;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
    return this.groups$;
   }

   // Gets a single group document based on an ID
   getGroup(id: string): Observable<Group> {
    this.groupDoc = this.angularFirestore.doc<Group>(`groups/${id}`);
    return this.group$ = this.groupDoc.valueChanges();
   }

   addGroup(
     groupTitle: string,
     groupLevel: string,
     groupLeader: string) {
     const groupsCollection = this.angularFirestore.collection<GroupID>('groups');
     if (this.authService.userID) {
      console.log('hey user');
    }
    groupsCollection.add({
      groupTitle: groupTitle,
      // groupLevel: groupLevel,
      // groupImage: groupLeader,

      groupContact: {
        email: this.authService.user.email
    },

      groupLeader: {
        groupLeaderID: this.authService.userID,
        groupLeaderName: this.authService.user.displayName,
      // groupLeaderImage: this.authService.user.local
      },

 /*   groupExecutiveBoard: {
        boardMemberID: this.authService.user.uid,
        boardMemberName: this.authService.user.displayName,
        boardMember: this.authService.user.profilePhoto
      }, */
    });
   }
}
