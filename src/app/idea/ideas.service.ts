import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Idea, IdeaID } from './idea.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  private ideasCollection: AngularFirestoreCollection<Idea>;
  ideas$: Observable<IdeaID[]>;

  ideaDoc: AngularFirestoreDocument<Idea>;
  idea$: Observable<Idea>;

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

   // get a single idea document based on an ID
   getIdea(id: string): Observable<Idea> {
    this.ideaDoc = this.angularFirestore.doc<Idea>(`ideas/${id}`);
    return this.idea$ = this.ideaDoc.valueChanges();
  }

  addIdea(
    ideaTitle: string,
    ideaText: string,
    ideaReason: string) {
    const ideasCollection = this.angularFirestore.collection<IdeaID>('ideas');
    ideasCollection.add({
      ideaTitle: ideaTitle,
      ideaText: ideaText,
      ideaReason: ideaReason
    });
  }
}
