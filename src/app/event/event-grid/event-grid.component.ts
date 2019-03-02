import { Component, OnInit, Input } from '@angular/core';
import { Location } from 'src/app/core/models/location.model';

@Component({
  selector: 'app-event-grid',
  templateUrl: './event-grid.component.html',
  styleUrls: ['./event-grid.component.css']
})
export class EventGridComponent implements OnInit {
  @Input() eventHashtags: string[];
  @Input() eventModerator: string[];
  @Input() eventDate: any;
  @Input() eventLocation: Location;

/*
  @Input() eventLocation?: {
    postCode?: string;
    city?: string;
    street?: string;
    houseNumber?: string;
    additionalInformation?: string;
};*/

  convertedDate: any;

  constructor() { }

  ngOnInit() {
    this.convertedDate = this.eventDate.toDate();

  }

}
