import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel, EventID } from 'src/app/core/models/event.model';

@Component({
  selector: 'app-group-events',
  templateUrl: './group-events.component.html',
  styleUrls: ['./group-events.component.css']
})
export class GroupEventsComponent implements OnInit {
  @Input() subEvents$: Observable<EventID[]>;

  constructor() { }

  ngOnInit() {
  }

}
