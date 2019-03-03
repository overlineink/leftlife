import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-group',
  templateUrl: './search-result-group.component.html',
  styleUrls: ['./search-result-group.component.css']
})
export class SearchResultGroupComponent implements OnInit {
  @Input() groupTitle: string;
  @Input() groupLevel: string;
  @Input() groupImage: string;
  @Input() groupLeader: string;
  @Input() groupID: string;

  @Input() groupHashtags: string[];
  @Input() groupIdeasTot: string;
  @Input() groupEventsTot: string; // TopicTitle, TopicTimeStart, TopicTimeEnd, Moderator, Content, Protocol, Tasks
  @Input() groupMembersTot: string;
  @Input() groupFollowersTot: string; // Task, Person
  convertedDate: any;

  members: string;
  followers: string;
  ideas: string;
  events: string;

  constructor() {
    this.members = 'Members';
    this.followers = 'Followers';
    this.ideas = 'Ideas';
    this.events = 'Events';
   }

  ngOnInit() {  }

}
