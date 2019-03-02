import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { SearchResultIdeaComponent } from './search-result-idea/search-result-idea.component';
import { SearchResultPersonComponent } from './search-result-person/search-result-person.component';
import { SearchResultEventComponent } from './search-result-event/search-result-event.component';
import { SearchResultGroupComponent } from './search-result-group/search-result-group.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [
    SearchComponent,
    SearchResultIdeaComponent,
    SearchResultPersonComponent,
    SearchResultEventComponent,
    SearchResultGroupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
