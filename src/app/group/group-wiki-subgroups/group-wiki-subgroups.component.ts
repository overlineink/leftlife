import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/core/models/group.model';

@Component({
  selector: 'app-group-wiki-subgroups',
  templateUrl: './group-wiki-subgroups.component.html',
  styleUrls: ['./group-wiki-subgroups.component.css']
})
export class GroupWikiSubgroupsComponent implements OnInit {
  subGroups: Group[];
  group: Group;

  constructor() { }

  ngOnInit() {
  }

}
