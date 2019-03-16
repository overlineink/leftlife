import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PostID } from '@post/post.model';

@Injectable({
  providedIn: 'root'
})
export class UploadPostService {

  constructor(private angularFirestore: AngularFirestore) { }

  addPost(
    uid: string,
    displayName: string,
    profilePhoto: string,
    postText: string,
    postHashtags: string[],
    postImage: string,
    postDate: any,
  ) {
    console.log('addPost');
    const postCollection = this.angularFirestore.collection<PostID>('posts');
    postCollection.add({
      postAuthor: {
        uid: uid,
        name: displayName,
        profilePhoto: profilePhoto,
      },
      postHashtags: postHashtags,
      postText: postText,
      postImage: postImage,
      postDate: postDate
    });
  }
}
