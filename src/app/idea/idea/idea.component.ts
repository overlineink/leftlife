import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/core/models/event.model';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
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

  constructor() {
    this.name = 'Tobias Hassebrock';
    this.local = 'Rosbach';
    this.regional = 'Hessen';
    this.federal = 'Germany';
    this.continental = 'Europe';
    this.profilePhoto = 'https://firebasestorage.googleapis.com/v0/b/leftlife1-e07e0.appspot.com/o/Tobi%2018.12.17%20SW.jpg?alt=media&token=d3e2b3ba-28b5-4487-8792-c749b451386b';
    this.ideaReason = 'The reason for this idea is';
    this.likes = '167';
    this.supporters = '54';
    this.proposals = '12';
    this.comments = '';

    this.ideaHashtags = ['Europe', 'Peace'];
    this.ideaTitle = 'Europäische Republik';
    this.ideaSubtitle = 'Building a better Europe!';
    this.ideaText = 'Wir fordern eine europäische Republik, die in einer globalisierten Welt wirtschaft für Gerechtigkeit sorgt.';
    this.ideaVideo = 'https://firebasestorage.googleapis.com/v0/b/leftlife1-e07e0.appspot.com/o/ideas%2FEuropean%20Union%20promotion%20clip%20%E2%80%94%20Together%20we%20are%20unstoppable.mp4?alt=media&token=a372b953-2bc6-4e74-b923-05c32189850d';
    this.ideaImage = 'https://firebasestorage.googleapis.com/v0/b/leftlife1-e07e0.appspot.com/o/Tobi%2018.12.17%20SW.jpg?alt=media&token=d3e2b3ba-28b5-4487-8792-c749b451386b';

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
