import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/services/events.service';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/core/models/event.model';
import { Topic } from 'src/app/core/models/topic.model';
import { EventsSubcollectionsService } from 'src/app/core/services/events-subcollections.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  // holds the event data
  event$: Observable<EventModel>;
  participants: string;
  ideas: string;
  tasks: string;
  topics: string;

  // holds the topics data
  topics$: Observable<Topic[]>;

  constructor(
    public eventsService: EventsService,
    private eventsSubCollections: EventsSubcollectionsService,

    private route: ActivatedRoute,
    private router: Router,
    ) {
    // gets the event
    // this.event$ = this.eventsService.getEvent('RXXRLQzFvScaEyGMD24F');

    // gets the topics of the event


   }

  ngOnInit() {
    this.participants = 'Participants';
    this.topics = 'Topics';
    this.tasks = 'Tasks';
    this.ideas = 'Ideas';

    // extracts the id from the URL and queries the fitting document
    this.event$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.eventsService.getEvent(params.get('id')),
      )
    );
    // extracts the id from the URL and queries the fitting document
    this.topics$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.eventsSubCollections.getTopicsCollection(params.get('id')),
      )
    );
  }

}
