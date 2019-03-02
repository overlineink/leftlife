import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Topic, TopicID } from '../models/topic.model';

@Injectable({
  providedIn: 'root'
})
export class EventsSubcollectionsService {
  private topicsCollection: AngularFirestoreCollection<Topic>;
  topicsCollection$: Observable<TopicID[]>;
  topicDoc: AngularFirestoreDocument<Topic>;
  topic$: Observable<Topic>;

  constructor(private readonly angularFirestore: AngularFirestore) { }

  getTopicsCollection(parentID: string): Observable<TopicID[]> {
    // gets the topics collection
    this.topicsCollection = this.angularFirestore.collection<Topic>(`events/${parentID}/topics`);
    // gets the topics collection and an aditional id
    this.topicsCollection$ = this.topicsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Topic;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
    return this.topicsCollection$;
   }
}
