import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSharedComponent } from './test-shared/test-shared.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormField,
  MatFormFieldModule,
 } from '@angular/material';
import { StructureComponent } from './structure/structure.component';
import { BarBotComponent } from './bar-bot/bar-bot.component';
import { BarBotOutComponent } from './bar-bot-out/bar-bot-out.component';
import { BarTopComponent } from './bar-top/bar-top.component';
import { BarTopOutComponent } from './bar-top-out/bar-top-out.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HashtagsEditComponent } from './hashtags-edit/hashtags-edit.component';
import { HeaderFaceComponent } from './header-face/header-face.component';
import { StatsComponent } from './stats/stats.component';
import { HashtagsComponent } from './hashtags/hashtags.component';
import { CardPhotoComponent } from './card-photo/card-photo.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ActionBarShareComponent } from './action-bar-share/action-bar-share.component';
import { ActionBarPostComponent } from './action-bar-post/action-bar-post.component';
import { ActionBarShareMapComponent } from './action-bar-share-map/action-bar-share-map.component';
import { HeaderFaceNoLocComponent } from './header-face-no-loc/header-face-no-loc.component';
import { GridTwoColomnTwoDetailsComponent } from './grid-two-colomn-two-details/grid-two-colomn-two-details.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UploadTaskComponent } from './file-upload-new/upload-task/upload-task.component';
import { UploaderComponent } from './file-upload-new/uploader/uploader.component';
import { DropzoneDirective } from './file-upload-new/dropzone.directive';

@NgModule({
  declarations: [
    TestSharedComponent,
    StructureComponent,
    BarBotComponent,
    BarBotOutComponent,
    BarTopComponent,
    BarTopOutComponent,
    HashtagsEditComponent,
    HeaderFaceComponent,
    StatsComponent,
    HashtagsComponent,
    CardPhotoComponent,
    ActionBarComponent,
    ActionBarShareComponent,
    ActionBarPostComponent,
    ActionBarShareMapComponent,
    HeaderFaceNoLocComponent,
    GridTwoColomnTwoDetailsComponent,
    FileUploadComponent,
    UploadTaskComponent,
    UploaderComponent,
    DropzoneDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,

    // UploadComponent,

    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  exports: [
    StructureComponent,
    ActionBarComponent,
    ActionBarPostComponent,
    ActionBarShareComponent,
    ActionBarShareMapComponent,
    ReactiveFormsModule,
    HashtagsEditComponent,
    HeaderFaceComponent,
    HeaderFaceNoLocComponent,
    StatsComponent,
    CardPhotoComponent,
    HashtagsComponent,
    ActionBarComponent,
    GridTwoColomnTwoDetailsComponent,
    UploadTaskComponent,
    UploaderComponent,
    DropzoneDirective,

    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormField,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FileUploadComponent
  ]
})
export class SharedModule { }
