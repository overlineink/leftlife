import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaComponent } from './idea/idea.component';

const ideaRoutes: Routes = [
  {
    path: 'idea',
    component: IdeaComponent
  },
  {
    path: 'idea/:id',
    component: IdeaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ideaRoutes)],
  exports: [RouterModule]
})
export class IdeaRoutingModule { }
