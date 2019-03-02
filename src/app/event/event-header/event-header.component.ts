import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.css']
})
export class EventHeaderComponent implements OnInit {
  @Input() eventTitle: string;
  @Input() eventImage: string;
  @Input() eventHost: string;


  constructor() { }

  ngOnInit() {
  }

}
