import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IdeaID } from '@idea/idea.model';
import { User } from '@profile/user.model';

@Injectable({
  providedIn: 'root'
})
export class UploadIdeaService {

  constructor(private angularFirestore: AngularFirestore) { }

  addIdea(
    ideaTitle: string,
    ideaSubtitle: string,
    ideaImage: string,
    ideaVideo: string,
    ideaText: string,
    ideaReason: string,
    ideaHashtags: string[],
    ideaDate: Date,

    ideaLikesTot: number,
    ideaProposalsTot: number,
    ideaSupportersTot: number,

    author: User,
  ) {
    console.log('addIdea');
    const ideaCollection = this.angularFirestore.collection<IdeaID>('ideas');
    ideaCollection.add({
      ideaTitle: ideaTitle,
      ideaSubtitle: ideaSubtitle,
      ideaImage: ideaImage,
      ideaVideo: ideaVideo,
      ideaText: ideaText,
      ideaReason: ideaReason,
      ideaHashtags: ideaHashtags,
      ideaDate: ideaDate,
      ideaLocation: author.local,

      ideaLikesTot: ideaLikesTot,
      ideaProposalsTot: ideaProposalsTot,
      ideaSupportersTot: ideaSupportersTot,

      ideaAuthor: {
        authorID: author.uid,
        authorName: author.displayName,
        authorImage: author.profilePhoto,
        authorLocal: author.local,
        authorRegional: author.regional,
        authorFederal: author.federal,
        authorContinental: author.continental
      }

    });
  }
}
