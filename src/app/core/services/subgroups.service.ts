import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Group, GroupID } from '../models/group.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubgroupsService {
  private subGroupCollection: AngularFirestoreCollection<Group>;
  subGroups$: Observable<GroupID[]>;

  subGroupDoc: AngularFirestoreDocument<Group>;
  group$: Observable<Group>;
  parentGroup$: Observable<Group>;


  constructor(private readonly angularFirestore: AngularFirestore) { }

   getSubgroups(parentID: string, subCollectionName: string): Observable<GroupID[]> {
    // gets the subgroups collection
    this.subGroupCollection = this.angularFirestore.collection<Group>(`groups/${parentID}/${subCollectionName}`);
    // gets the subgroups and an aditional id
    this.subGroups$ = this.subGroupCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Group;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
    return this.subGroups$;
   }

   // Gets a single group document based on an ID of the subgroup
   getSubgroupDoc(id: string, subCollectionName: string): Observable<Group> {
    this.subGroupDoc = this.angularFirestore.doc<Group>(`${subCollectionName}/${id}`);
    return this.group$ = this.subGroupDoc.valueChanges();
   }
}
