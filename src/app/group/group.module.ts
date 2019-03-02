import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { SharedModule } from '../shared/shared.module';
import { GroupWikiComponent } from './group-wiki/group-wiki.component';
import { GroupStreamComponent } from './group-stream/group-stream.component';
import { GroupEventsComponent } from './group-events/group-events.component';
import { GroupIdeasComponent } from './group-ideas/group-ideas.component';
import { FilterComponent } from './filter/filter.component';
import { GroupWikiHeaderComponent } from './group-wiki-header/group-wiki-header.component';
import { GroupWikiGridComponent } from './group-wiki-grid/group-wiki-grid.component';
import { GroupWikiSubgroupsComponent } from './group-wiki-subgroups/group-wiki-subgroups.component';
import { GroupWikiContactComponent } from './group-wiki-contact/group-wiki-contact.component';
import { GroupRoutingModule } from './group-routing.module';

@NgModule({
  declarations: [
    GroupComponent,
    GroupWikiComponent,
    GroupStreamComponent,
    GroupEventsComponent,
    GroupIdeasComponent,
    FilterComponent,
    GroupWikiHeaderComponent,
    GroupWikiGridComponent,
    GroupWikiSubgroupsComponent,
    GroupWikiContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GroupRoutingModule
  ],
  exports: [
    GroupComponent
  ]
})
export class GroupModule { }
