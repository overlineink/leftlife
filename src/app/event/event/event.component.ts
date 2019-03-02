import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/services/events.service';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/core/models/event.model';
import { Topic } from 'src/app/core/models/topic.model';
import { EventsSubcollectionsService } from 'src/app/core/services/events-subcollections.service';

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
    private eventsSubCollections: EventsSubcollectionsService) {
    // gets the event
    this.event$ = this.eventsService.getEvent('RXXRLQzFvScaEyGMD24F');
    this.participants = 'Participants';
    this.topics = 'Topics';
    this.tasks = 'Tasks';
    this.ideas = 'Ideas';

    // gets the topics of the event
    this.topics$ = this.eventsSubCollections.getTopicsCollection('RXXRLQzFvScaEyGMD24F');
   }

  ngOnInit() {
  }

}
