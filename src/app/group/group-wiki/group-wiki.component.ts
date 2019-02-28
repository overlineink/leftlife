import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { Observable } from 'rxjs';
import { Group, GroupID } from 'src/app/core/models/group.model';

@Component({
  selector: 'app-group-wiki',
  templateUrl: './group-wiki.component.html',
  styleUrls: ['./group-wiki.component.css']
})
export class GroupWikiComponent implements OnInit {
  group$: Observable<GroupID>;

  constructor(private groupService: GroupsService) { }

  ngOnInit() {
    this.group$ = this.groupService.getGroup('cBSVtYm2kk3IWtM320bn');
  }

}
