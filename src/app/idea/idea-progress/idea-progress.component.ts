import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from '@event/event.model';

@Component({
  selector: 'app-idea-progress',
  templateUrl: './idea-progress.component.html',
  styleUrls: ['./idea-progress.component.css']
})
export class IdeaProgressComponent implements OnInit {
  @Input() localEvent: EventModel;
  @Input() districtEvent: EventModel;
  @Input() regionalEvent: EventModel;
  @Input() federalEvent: EventModel;


  constructor() { }

  ngOnInit() {

  }

}
