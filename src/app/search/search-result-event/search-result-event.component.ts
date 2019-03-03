import { Component, OnInit, Input } from '@angular/core';
import { EventID } from '@event/event.model';
import { Location } from '@models/location.model';

@Component({
  selector: 'app-search-result-event',
  templateUrl: './search-result-event.component.html',
  styleUrls: ['./search-result-event.component.css']
})
export class SearchResultEventComponent implements OnInit {
  @Input() eventTitle: string;
  @Input() eventHost: string;
  @Input() eventLocation: Location; // PLZ, City, Street, Housenumber, AdditionalInformation
  @Input() eventDate: any;
  @Input() eventImage: string;
  @Input() eventModerator: string;
  @Input() eventID: string;

  @Input() eventHashtags: string[];
  @Input() eventIdeas: string;
  @Input() eventTopicsTot: string; // TopicTitle, TopicTimeStart, TopicTimeEnd, Moderator, Content, Protocol, Tasks
  @Input() eventParticipants: string;
  @Input() eventTasksTot: string; // Task, Person
  @Input() eventIdeasTot: string;
  convertedDate: any;

  participants: string;
  topics: string;
  tasks: string;
  ideas: string;

  constructor() {
    this.participants = 'Participants';
    this.topics = 'Topics';
    this.tasks = 'Tasks';
    this.ideas = 'Ideas';
   }

  ngOnInit() {
    this.convertedDate = this.eventDate.toDate();
  }

}
