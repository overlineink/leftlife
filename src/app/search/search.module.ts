import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultIdeaComponent } from './search-result-idea/search-result-idea.component';
import { SearchResultPersonComponent } from './search-result-person/search-result-person.component';
import { SearchResultEventComponent } from './search-result-event/search-result-event.component';
import { SearchResultGroupComponent } from './search-result-group/search-result-group.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { EventModule } from '../event/event.module';
import { EventGridComponent } from '../event/event-grid/event-grid.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchResultIdeaComponent,
    SearchResultPersonComponent,
    SearchResultEventComponent,
    SearchResultGroupComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EventModule,
    SearchRoutingModule
  ],
  exports: [
    SearchComponent,
    SearchResultEventComponent,
    SearchResultGroupComponent,
    SearchResultIdeaComponent,
    SearchResultPersonComponent,
    SearchFormComponent
  ]
})
export class SearchModule { }
