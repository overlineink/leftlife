import { Component, OnInit } from '@angular/core';
import { GroupsService } from '@group/groups.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  // Restructure search header
  // insert it into Group taps

  constructor(private groupService: GroupsService) { }

  ngOnInit() {  }

}
