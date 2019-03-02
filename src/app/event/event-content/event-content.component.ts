import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-content',
  templateUrl: './event-content.component.html',
  styleUrls: ['./event-content.component.css']
})
export class EventContentComponent implements OnInit {
  // holds the data of a topic
  @Input() topicTitle: string;
  @Input() topicImage: string;
  @Input() topicProtocol: string;
  @Input() topicContent: string;
  @Input() topicTimeStart: any;
  @Input() topicTimeEnd: any;
  @Input() topicModerator: string;

  convertedStartDate: any;
  convertedEndDate: any;



  constructor() {   }

  ngOnInit() {
    this.convertedStartDate = this.topicTimeStart.toDate();
    this.convertedEndDate = this.topicTimeEnd.toDate();

  }

}
