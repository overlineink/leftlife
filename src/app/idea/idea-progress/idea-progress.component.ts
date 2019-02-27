import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from 'src/app/core/models/event.model';
import { Idea } from 'src/app/core/models/idea.model';

@Component({
  selector: 'app-idea-progress',
  templateUrl: './idea-progress.component.html',
  styleUrls: ['./idea-progress.component.css']
})
export class IdeaProgressComponent implements OnInit {
  @Input() ideaEventsUp: any;
  @Input() eventLocal: any;
  @Input() eventDistrict: EventModel;
  @Input() eventRegional: EventModel;
  @Input() eventFederal: EventModel;

  convertedLocalDate: string;
  convertedDistrictDate: string;
  convertedRegionalDate: string;
  convertedFederalDate: string;

  constructor() { }

  ngOnInit() {
    this.eventLocal = this.ideaEventsUp.eventLocal;
    this.eventDistrict = this.ideaEventsUp.eventDistrict;
    this.eventRegional = this.ideaEventsUp.eventRegional;
    this.eventFederal = this.ideaEventsUp.eventFederal;

    this.convertedLocalDate = this.ideaEventsUp.eventLocal.eventDate.toDate();
    this.convertedDistrictDate = this.ideaEventsUp.eventDistrict.eventDate.toDate();
    this.convertedRegionalDate = this.ideaEventsUp.eventRegional.eventDate.toDate();
    this.convertedFederalDate = this.ideaEventsUp.eventFederal.eventDate.toDate();
  }

}
