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
import { ComponentTestComponent } from './component-test/component-test.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReactiveModelDrivenFormsComponent } from './reactive-model-driven-forms/reactive-model-driven-forms.component';


@NgModule({
  declarations: [
    OberservablesComponent,
    ObsConstructorComponent,
    OperatorsComponent,
    UnitTestComponent,
    StringTestComponent,
    VoteComponent,
    ChangeDetectionComponent,
    AsynchronousComponent,
    ComponentTestComponent,
    ModelDrivenFormsComponent,
    ReactiveModelDrivenFormsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    OberservablesComponent,
    ObsConstructorComponent,
    OperatorsComponent,
    UnitTestComponent,
    StringTestComponent,
    VoteComponent,
    ChangeDetectionComponent,
    AsynchronousComponent,
    ComponentTestComponent,
    ModelDrivenFormsComponent,
    ReactiveModelDrivenFormsComponent
  ]
})
export class LearningModule { }
