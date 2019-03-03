import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-upload-header',
  templateUrl: './upload-header.component.html',
  styleUrls: ['./upload-header.component.css']
})
export class UploadHeaderComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close();
  }

}
