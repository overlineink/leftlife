import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FollowDialogComponent } from '../follow-dialog/follow-dialog.component';

@Component({
  selector: 'app-follow-stats',
  templateUrl: './follow-stats.component.html',
  styleUrls: ['./follow-stats.component.css']
})
export class FollowStatsComponent implements OnInit {
  @Input() label1: string;
  @Input() number1: string;
  @Input() label2: string;
  @Input() number2: string;
  @Input() label3: string;
  @Input() number3: string;
  @Input() label4: string;
  @Input() number4: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FollowDialogComponent, {
      width: '250px',
      data: { test: 'tobi'}
    });
  }

}
