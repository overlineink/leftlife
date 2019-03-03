import { Component, OnInit, Input } from '@angular/core';
import { GroupsService } from '@group/groups.service';
import { Observable } from 'rxjs';
import { Group, GroupID } from '@group/group.model';

@Component({
  selector: 'app-group-wiki',
  templateUrl: './group-wiki.component.html',
  styleUrls: ['./group-wiki.component.css']
})
export class GroupWikiComponent implements OnInit {
  @Input() group$: Observable<GroupID>;

  constructor(private groupService: GroupsService) { }

  ngOnInit() {
  }

}
