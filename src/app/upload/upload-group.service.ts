import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { GroupID } from '@group/group.model';
import { User } from '@profile/user.model';

@Injectable({
  providedIn: 'root'
})
export class UploadGroupService {

  constructor(private angularFirestore: AngularFirestore) { }

  addGroup(
    groupTitle: string,
    groupImage: string,
    groupHashtags: string[],
    groupCreated: Date,

    author: User,

    groupMembersTot: number,
    groupFollowersTot: number,
    groupIdeasTot: number,
    groupEventsTot: number,

    groupEmail: string,
    groupPhone: string,
  ) {
    const groupsCollection = this.angularFirestore.collection<GroupID>('groups');
    groupsCollection.add({
      groupTitle: groupTitle,
      groupImage: groupImage,
      groupHashtags: groupHashtags,
      groupCreated: groupCreated,

      groupLeader: {
        groupLeaderID: author.uid,
        groupLeaderName: author.displayName,
        groupLeaderImage: author.profilePhoto
      },

      groupMembersTot: groupMembersTot,
      groupFollowersTot: groupFollowersTot,
      groupIdeasTot: groupIdeasTot,
      groupEventsTot: groupEventsTot,

      groupContact: {
        email: groupEmail,
        phone: groupPhone
      },

      groupExecutiveBoard: [{
        boardMemberID: author.uid,
        boardMemberName: author.displayName,
        boardMemberImage: author.profilePhoto
      }],

    });
  }
}
