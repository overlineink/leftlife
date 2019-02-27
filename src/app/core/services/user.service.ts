import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User, Person } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userCollection: AngularFirestoreCollection<User>;
  persons$: Observable<Person[]>;

  personDoc: AngularFirestoreDocument<User>;
  person$: Observable<User>;

  constructor(
    private readonly angularFirestore: AngularFirestore
  ) { }

   getPersons(): Observable<Person[]> {
    // gets the users collection
    this.userCollection = this.angularFirestore.collection<Person>('users');
    // gets the users and an aditional id
    this.persons$ = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Person;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
    return this.persons$;
   }

   // Gets a single person document based on an ID
   getPerson(id: string): Observable<User> {
    this.personDoc = this.angularFirestore.doc<User>(`users/${id}`);
    return this.person$ = this.personDoc.valueChanges();
  }
}
