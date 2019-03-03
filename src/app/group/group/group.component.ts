import { Component, OnInit } from '@angular/core';
import { GroupsService } from '@group/groups.service';
import { GroupsSubcollectionsService } from '@group/groups-subcollections.service';
import { Observable } from 'rxjs';
import { EventModel, EventID } from '@event/event.model';
import { Idea, IdeaID } from '@idea/idea.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GroupID } from '@group/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  subEvents$: Observable<EventID[]>;
  subIdeas$: Observable<IdeaID[]>;

  group$: Observable<GroupID>;



  constructor(
    private subCollectionService: GroupsSubcollectionsService,
    public groupService: GroupsService,

    private route: ActivatedRoute,
    private router: Router,
    ) {   }

  ngOnInit() {
    // extracts the id from the URL and queries the fitting document
    this.group$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.groupService.getGroup(params.get('id')),
      )
    );
    // this.group$ = this.groupService.getGroup('cBSVtYm2kk3IWtM320bn');
    // extracts the id from the URL and queries the fitting document
    this.subEvents$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.subCollectionService.getSubEventcollection(params.get('id')),
      )
    );
    // extracts the id from the URL and queries the fitting document
    this.subIdeas$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.subCollectionService.getSubIdeascollection(params.get('id')),
      )
    );

    // this.subEvents$ = this.subCollectionService.getSubEventcollection('cBSVtYm2kk3IWtM320bn');
    // this.subIdeas$ = this.subCollectionService.getSubIdeascollection('cBSVtYm2kk3IWtM320bn');

  }

}
