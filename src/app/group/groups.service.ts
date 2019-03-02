import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Group, GroupID } from './group.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private groupsCollection: AngularFirestoreCollection<Group>;
  groups$: Observable<GroupID[]>;

  constructor(
    private readonly angularFirestore: AngularFirestore
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
}
