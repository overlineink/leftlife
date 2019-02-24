import { Component, OnInit } from '@angular/core';
import { IdeasService } from 'src/app/core/services/ideas.service';
import { Observable } from 'rxjs';
import { IdeaID } from 'src/app/core/models/idea.model';
import { UserService } from 'src/app/core/services/user.service';
import { Person } from 'src/app/core/models/user.model';
import { EventID } from 'src/app/core/models/event.model';
import { EventsService } from 'src/app/core/services/events.service';
import { GroupID } from 'src/app/core/models/group.model';
import { GroupsService } from 'src/app/core/services/groups.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  hashtags = ['Europa', 'SPD', 'EU'];
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
