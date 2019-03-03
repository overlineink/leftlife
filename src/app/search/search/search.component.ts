import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IdeasService } from '@idea/ideas.service';
import { IdeaID } from '@idea/idea.model';
import { UserService } from '@profile/user.service';
import { Person } from '@profile/user.model';
import { EventID } from '@event/event.model';
import { EventsService } from '@event/events.service';
import { GroupID } from '@group/group.model';
import { GroupsService } from '@group/groups.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  ideas$: Observable<IdeaID[]>;
  persons$: Observable<Person[]>;
  events$: Observable<EventID[]>;
  groups$: Observable<GroupID[]>;

  constructor(
    private ideaService: IdeasService,
    private personService: UserService,
    private eventService: EventsService,
    private groupService: GroupsService
  ) { }

  ngOnInit() {
    this.ideas$ = this.ideaService.getIdeas();
    this.persons$ = this.personService.getPersons();
    this.events$ = this.eventService.getEvents();
    this.groups$ = this.groupService.getGroups();
  }



}
