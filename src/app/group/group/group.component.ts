import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { GroupsSubcollectionsService } from 'src/app/core/services/groups-subcollections.service';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/core/models/event.model';
import { Idea } from 'src/app/core/models/idea.model';
import { GroupID } from 'src/app/core/models/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  subEvents$: Observable<EventModel[]>;
  subIdeas$: Observable<Idea[]>;

  group$: Observable<GroupID>;



  constructor(
    private subCollectionService: GroupsSubcollectionsService,
    public groupService: GroupsService
    ) {
    this.group$ = this.groupService.getGroup('cBSVtYm2kk3IWtM320bn');

    this.subEvents$ = this.subCollectionService.getSubEventcollection('cBSVtYm2kk3IWtM320bn');
    this.subIdeas$ = this.subCollectionService.getSubIdeascollection('cBSVtYm2kk3IWtM320bn');

   }

  ngOnInit() {  }

}
