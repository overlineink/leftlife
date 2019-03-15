import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowButtonComponent } from '@follow/follow-button/follow-button.component';
import { FollowDialogComponent } from '@follow/follow-dialog/follow-dialog.component';
import { FollowStatsComponent } from '@follow/follow-stats/follow-stats.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    FollowButtonComponent,
    FollowDialogComponent,
    FollowStatsComponent
  ],
  entryComponents: [
    FollowDialogComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    FollowButtonComponent,
    FollowDialogComponent,
    FollowStatsComponent
  ]
})
export class FollowModule { }
