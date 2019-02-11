import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OberservablesComponent } from './oberservables/oberservables.component';
import { ObsConstructorComponent } from './obs-constructor/obs-constructor.component';
import { OperatorsComponent } from './operators/operators.component';
import { UnitTestComponent } from './unit-test/unit-test.component';
import { StringTestComponent } from './string-test/string-test.component';
import { VoteComponent } from './vote/vote.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';

@NgModule({
  declarations: [
    OberservablesComponent,
    ObsConstructorComponent,
    OperatorsComponent,
    UnitTestComponent,
    StringTestComponent,
    VoteComponent,
    ChangeDetectionComponent,
    AsynchronousComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OberservablesComponent,
    ObsConstructorComponent,
    OperatorsComponent,
    UnitTestComponent,
    StringTestComponent,
    VoteComponent,
    ChangeDetectionComponent,
    AsynchronousComponent
  ]
})
export class LearningModule { }
