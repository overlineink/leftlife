import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningModule } from './learning/learning.module';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './search/search.module';
import { TimelineModule } from './timeline/timeline.module';
import { IdeaModule } from './idea/idea.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LearningModule,
    CoreModule,
    SharedModule,
    ProfileModule,
    SearchModule,
    TimelineModule,
    IdeaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
