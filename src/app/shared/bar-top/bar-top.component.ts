import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UploadComponent } from '@upload/upload/upload.component';

@Component({
  selector: 'app-bar-top',
  templateUrl: './bar-top.component.html',
  styleUrls: ['./bar-top.component.css']
})
export class BarTopComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UploadComponent, {
      width: '100vw',
      height:  '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      panelClass: 'myClass'
    });
  }

}
