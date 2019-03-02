import { Component, OnInit } from '@angular/core';
import { Group } from '@group/group.model';

@Component({
  selector: 'app-group-wiki-header',
  templateUrl: './group-wiki-header.component.html',
  styleUrls: ['./group-wiki-header.component.css']
})
export class GroupWikiHeaderComponent implements OnInit {
  group: Group;

  constructor() { }

  ngOnInit() {
  }

}
