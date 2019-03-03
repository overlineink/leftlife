import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@models/location.model';

@Component({
  selector: 'app-group-wiki-contact',
  templateUrl: './group-wiki-contact.component.html',
  styleUrls: ['./group-wiki-contact.component.css']
})
export class GroupWikiContactComponent implements OnInit {
  @Input() groupLocation: Location;
  @Input() groupLeader: any;
  @Input() groupContact: any;

  constructor() { }

  ngOnInit() {
  }

}
