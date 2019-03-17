import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Post, PostID } from './post.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsCollection: AngularFirestoreCollection<Post>;
  posts$: Observable<PostID[]>;

  postDoc: AngularFirestoreDocument<Post>;
  post$: Observable<Post>;

  constructor(
    private readonly angularFirestore: AngularFirestore
  ) { }

   getPosts(): Observable<PostID[]> {
    // gets the post collection
    this.postsCollection = this.angularFirestore.collection<Post>('posts');
    // gets the posts and an aditional id
    this.posts$ = this.postsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
    return this.posts$;
   }

   // get a single post document based on an ID
   getIPost(id: string): Observable<Post> {
    this.postDoc = this.angularFirestore.doc<Post>(`posts/${id}`);
    return this.post$ = this.postDoc.valueChanges();
  }

  addPost(
    postText: string,
    postAuthor: string,
    postLocation: string) {
    const postCollection = this.angularFirestore.collection<PostID>('posts');
    postCollection.add({
      // postText: postText,
      // postAuthor: postAuthor,
      // postLocation: postLocation
    });
  }
}

