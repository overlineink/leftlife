import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../ideas.service';
import { Observable } from 'rxjs';
import { Idea, IdeaID } from '../../models/idea.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Person } from '../../models/user.model';
import { UserService } from '../user.service';
import { EventID, EventModel } from '../../models/event.model';
import { EventsService } from '../events.service';
import { GroupID } from '../../models/group.model';
import { GroupsService } from '../groups.service';

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
