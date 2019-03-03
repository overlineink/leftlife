import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group/group.component';

const groupRoutes: Routes = [
  {
    path: 'group',
    component: GroupComponent
  },
  {
    path: 'group/:id',
    component: GroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(groupRoutes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
