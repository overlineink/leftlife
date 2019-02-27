import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/core/models/event.model';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Idea } from 'src/app/core/models/idea.model';
import { IdeasService } from 'src/app/core/services/ideas.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  idea$: Observable<Idea>;
  // author attributes
  name: string;
  local: string;
  regional: string;
  federal: string;
  continental: string;
  profilePhoto: string;

  // sub collections
  likes: string;
  supporters: string;
  proposals: string;
  comments: string;

  ideaHashtags: string[];
  ideaTitle: string;
  ideaSubtitle: string;
  ideaText: string;
  ideaReason: string;
  ideaVideo: string;
  ideaImage: string;

  localEvent: EventModel;
  districtEvent: EventModel;
  regionalEvent: EventModel;
  federalEvent: EventModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ideasService: IdeasService
  ) {
    this.idea$ = this.ideasService.getIdea('Fq8S8PpATT3PID84dE88');

    this.localEvent = {
      eventTitle: 'Local Event',
      eventDate: {
        date: '23.04.2019',
        time: '19:00'
      },
      eventLocation: {
        postCode: '61191',
        city: 'Rosbach',
        street: 'Bürgerhausstraße',
        houseNumber: '46',
        additionalInformation: 'Townhall, room 206'
      }
    };

    this.districtEvent = {
      eventTitle: 'District Event',
      eventDate: {
        date: '05.05.2019',
        time: '09:00'
      },
      eventLocation: {
        postCode: '6123',
        city: 'Friedberg',
        street: 'Bürgerhausstraße',
        houseNumber: '46',
        additionalInformation: 'Townhall, room 147'
      }
    };

    this.regionalEvent = {
      eventTitle: 'Regional Event',
      eventDate: {
        date: '05.06.2019',
        time: '19:00'
      },
      eventLocation: {
        postCode: '61191',
        city: 'Rosbach',
        street: 'Bürgerhausstraße',
        houseNumber: '46',
        additionalInformation: 'Townhall, room 18'
      }
    };

    this.federalEvent = {
      eventTitle: 'Federal Event',
      eventDate: {
        date: '09.08.2019',
        time: '19:00'
      },
      eventLocation: {
        postCode: '61191',
        city: 'Rosbach',
        street: 'Bürgerhausstraße',
        houseNumber: '46',
        additionalInformation: 'Townhall, room 26'
      }
    };
  }

  ngOnInit() {
  }

}
