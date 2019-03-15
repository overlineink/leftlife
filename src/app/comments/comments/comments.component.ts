import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  postRef: AngularFirestoreDocument<any>;
  post$: Observable<any>;

  commentsRef: AngularFirestoreCollection<any>;
  comments$: Observable<any>;

  formValue: string;

  constructor(private angularFirestore: AngularFirestore ) { }

  ngOnInit() {
    this.postRef = this.angularFirestore.doc('posts/PudTfg1V7ohuwFUsIde3');
    this.commentsRef = this.postRef.collection('comments', ref => ref.orderBy('createdAT', 'desc'));

    this.post$ = this.postRef.valueChanges();
    this.comments$ = this.commentsRef.valueChanges();

  }

  addComment() {
    console.log(this.formValue);
    this.commentsRef.add({ content: 'hello2', createdAt: new Date() });
    this.formValue = '';
  }

  loadMore() {
    this.comments$ = this.commentsRef.valueChanges();
  }

}
