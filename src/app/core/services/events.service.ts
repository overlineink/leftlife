import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { EventModel, EventID } from '../models/event.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsCollection: AngularFirestoreCollection<EventModel>;
  events$: Observable<EventID[]>;

  constructor(
    private readonly angularFirestore: AngularFirestore
  ) { }

   getEvents(): Observable<EventID[]> {
    // gets the events collection
    this.eventsCollection = this.angularFirestore.collection<EventModel>('events');
    // gets the ideas and an aditional id
    this.events$ = this.eventsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as EventModel;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
    return this.events$;
   }
}
