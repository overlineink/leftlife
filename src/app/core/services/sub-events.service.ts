import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Idea, IdeaID } from '../models/idea.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubEventsService {
  private subIdeaCollection: AngularFirestoreCollection<Idea>;
  subIdeas$: Observable<IdeaID[]>;

  subIdeaDoc: AngularFirestoreDocument<Idea>;
  idea$: Observable<Idea>;


  constructor(private readonly angularFirestore: AngularFirestore) { }

   getSubIdeas(parentID: string, subCollectionName: string): Observable<IdeaID[]> {
    // gets the subgroups collection
    this.subIdeaCollection = this.angularFirestore.collection<Idea>(`ideas/${parentID}/${subCollectionName}`);
    // gets the subgroups and an aditional id
    this.subIdeas$ = this.subIdeaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Idea;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
    return this.subIdeas$;
   }

   // Gets a single group document based on an ID of the subgroup
   getSubgroupDoc(id: string, subCollectionName: string): Observable<Idea> {
    this.subIdeaDoc = this.angularFirestore.doc<Idea>(`${subCollectionName}/${id}`);
    return this.idea$ = this.subIdeaDoc.valueChanges();
   }
}
