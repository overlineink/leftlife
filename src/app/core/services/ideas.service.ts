import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Idea, IdeaID } from '../models/idea.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  private ideasCollection: AngularFirestoreCollection<Idea>;
  ideas$: Observable<IdeaID[]>;

  constructor(
    private readonly angularFirestore: AngularFirestore
  ) { }

   getIdeas(): Observable<IdeaID[]> {
    // gets the ideas collection
    this.ideasCollection = this.angularFirestore.collection<Idea>('ideas');
    // gets the ideas and an aditional id
    this.ideas$ = this.ideasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Idea;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
    return this.ideas$;
   }
}
