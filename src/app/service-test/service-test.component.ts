import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

import { IdeasService } from '@idea/ideas.service';
import { Idea, IdeaID } from '@idea/idea.model';
import { Person } from '@profile/user.model';
import { UserService } from '@profile/user.service';
import { EventID, EventModel } from '@event/event.model';
import { EventsService } from '@event/events.service';
import { GroupID } from '@group/group.model';
import { GroupsService } from '@group/groups.service';
import { GroupsSubcollectionsService } from '@group/groups-subcollections.service';
import { Follow, FollowID } from 'app/follow/follow.model';
import { ProfileFollowService } from 'app/follow/profile-follow.service';

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.css']
})
export class ServiceTestComponent implements OnInit {
  ideas$: Observable<IdeaID[]>;
  persons$: Observable<Person[]>;
  events$: Observable<EventID[]>;
  groups$: Observable<GroupID[]>;
  subEvents$: Observable<EventID[]>;

  idea$: Observable<Idea>;
  // follower$: Observable<FollowID[]>;
  // follow$: boolean;

  // test: any;
  // followState: any;
  // followStateA: Observable<boolean>;


  // Follow Unfollow

  constructor(
    private ideasService: IdeasService,
    private personService: UserService,
    private eventsService: EventsService,
    private groupsService: GroupsService,
    private groupSubcollectionService: GroupsSubcollectionsService,
    private followService: ProfileFollowService
  ) {
    // this.followStateA = this.followService.callCheckFollowA('CSoYMI9JNQeytXEj3Ofhia8YRlH3', 'vidhishaID');

    this.ideas$ = this.ideasService.getIdeas();
    this.persons$ = this.personService.getPersons();
    this.events$ = this.eventsService.getEvents();
    this.groups$ = this.groupsService.getGroups();
    // this.follower$ = this.followService.getFollowerCollection('CSoYMI9JNQeytXEj3Ofhia8YRlH3');
    // this.ideasService.getIdea('Fq8S8PpATT3PID84dE88');
    this.subEvents$ = this.groupSubcollectionService.getSubEventcollection('cBSVtYm2kk3IWtM320bn');
    console.log(this.subEvents$);

    this.idea$ = this.ideasService.getIdea('Fq8S8PpATT3PID84dE88'); /*
    this.followService.checksFollow('CSoYMI9JNQeytXEj3Ofhia8YRlH3', 'vidhishaID');
    console.log('hello' + this.followService.followState);
    this.followService.confirmFollow();
    console.log('seocndtry' + this.followService.followState);
    this.test = this.followService.checksFollow('CSoYMI9JNQeytXEj3Ofhia8YRlH3', 'vidhishaID');
    console.log('third time ' + this.test);*/

    // this.follow$ = this.followService.getFollow('CSoYMI9JNQeytXEj3Ofhia8YRlH3', 'vidhishaID');
    // console.log(this.follow$);

  }

  async ngOnInit() {
     // this.followState = await this.followService.checkFollow('CSoYMI9JNQeytXEj3Ofhia8YRlH3', 'vidhishaID');

    // console.log('followstate' + this.followState);
    // console.log('serviceState' + this.followService.followState);
  }
/*
  // Follow Unfollow
  follow(): void {
    console.log('follow');
    console.log('hello' + this.test);
    // this.test = this.followService.callCheckFollow('CSoYMI9JNQeytXEj3Ofhia8YRlH3', 'vidhishaID');
    this.followService.addFollow(
      // ID of the followed user
      'CSoYMI9JNQeytXEj3Ofhia8YRlH3',
      // follower ID and attributes
      'vidhishaID',
      'Vidhisha',
      'https://firebasestorage.googleapis.com/v0/b/leftlife1-e07e0.appspot.com/o/test%2F1551352829982_IMG_20170829_210135_785.jpg?alt=media&token=a5f41020-4f8e-452f-8411-72b1f6118da3',
      );
  }

  unfollow(): void {
    this.followService.deleteFollow(
       // ID of the followed user
      'CSoYMI9JNQeytXEj3Ofhia8YRlH3',
      // follower ID
      'vidhishaID'
      );
    console.log('unfollow');
  }
*/
}
