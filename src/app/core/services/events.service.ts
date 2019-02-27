import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { EventModel, EventID } from '../models/event.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsCollection: AngularFirestoreCollection<EventModel>;
  events$: Observable<EventID[]>;

  eventDoc: AngularFirestoreDocument<EventModel>;
  event$: Observable<EventModel>;

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

   // Gets a single group document based on an ID
   getEvent(id: string): Observable<EventModel> {
    this.eventDoc = this.angularFirestore.doc<EventModel>(`events/${id}`);
    return this.event$ = this.eventDoc.valueChanges();
   }
}
