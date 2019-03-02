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

  constructor(
    private ideasService: IdeasService,
    private personService: UserService,
    private eventsService: EventsService,
    private groupsService: GroupsService
  ) {
    this.ideas$ = this.ideasService.getIdeas();
    this.persons$ = this.personService.getPersons();
    this.events$ = this.eventsService.getEvents();
    this.groups$ = this.groupsService.getGroups();
   }

  ngOnInit() {
  }

}
