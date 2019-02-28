import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { GroupWikiComponent } from './group-wiki/group-wiki.component';
import { GroupStreamComponent } from './group-stream/group-stream.component';
import { GroupEventsComponent } from './group-events/group-events.component';
import { GroupIdeasComponent } from './group-ideas/group-ideas.component';
import { FilterComponent } from './filter/filter.component';
import { GroupWikiContactComponent } from './group-wiki-contact/group-wiki-contact.component';
import { GroupRoutingModule } from './group-routing.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [
    GroupComponent,
    GroupWikiComponent,
    GroupStreamComponent,
    GroupEventsComponent,
    GroupIdeasComponent,
    FilterComponent,
    GroupWikiContactComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    GroupRoutingModule,
    SearchModule
  ],
  exports: [
    GroupComponent
  ]
})
export class GroupModule { }
