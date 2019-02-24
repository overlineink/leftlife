import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { SearchResultIdeaComponent } from './search-result-idea/search-result-idea.component';
import { SearchResultPersonComponent } from './search-result-person/search-result-person.component';
import { SearchResultEventComponent } from './search-result-event/search-result-event.component';
import { SearchResultGroupComponent } from './search-result-group/search-result-group.component';

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
    CoreModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
