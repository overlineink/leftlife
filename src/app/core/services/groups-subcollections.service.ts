import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventID, EventModel } from '../models/event.model';
import { Idea, IdeaID } from '../models/idea.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsSubcollectionsService {
  private subEventsCollection: AngularFirestoreCollection<EventModel>;
  subEventsCollection$: Observable<EventID[]>;
  subEventDoc: AngularFirestoreDocument<EventModel>;
  subEvent$: Observable<EventModel>;

  private subIdeasCollection: AngularFirestoreCollection<Idea>;
  subIdeasCollection$: Observable<IdeaID[]>;
  subIdeaDoc: AngularFirestoreDocument<Idea>;
  subIdea$: Observable<Idea>;


  constructor(private readonly angularFirestore: AngularFirestore) { }

   getSubEventcollection(parentID: string): Observable<EventID[]> {
    // gets the subEvents collection
    this.subEventsCollection = this.angularFirestore.collection<EventModel>(`groups/${parentID}/subEvents`);
    // gets the subEvents and an aditional id
    this.subEventsCollection$ = this.subEventsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as EventModel;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
    return this.subEventsCollection$;
   }

   getSubIdeascollection(parentID: string): Observable<IdeaID[]> {
    // gets the subIdea collection
    this.subIdeasCollection = this.angularFirestore.collection<Idea>(`groups/${parentID}/subIdeas`);
    // gets the subIdeas and an aditional id
    this.subIdeasCollection$ = this.subIdeasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Idea;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
    return this.subIdeasCollection$;
   }

   // Gets a single event document based on an ID of the subEventsCollection
   getSubgroupDoc(parentID: string, docID: string): Observable<EventModel> {
    this.subEventDoc = this.angularFirestore.doc<EventModel>(`groups/${parentID}/subevents/${docID}`);
    return this.subEvent$ = this.subEventDoc.valueChanges();
   }
}
