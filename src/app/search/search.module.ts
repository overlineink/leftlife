import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { SearchAllComponent } from './search-all/search-all.component';
import { SearchPersonsComponent } from './search-persons/search-persons.component';
import { SearchEventsComponent } from './search-events/search-events.component';
import { SearchGroupsComponent } from './search-groups/search-groups.component';
import { SearchIdeasComponent } from './search-ideas/search-ideas.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchAllComponent,
    SearchPersonsComponent,
    SearchEventsComponent,
    SearchGroupsComponent,
    SearchIdeasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
