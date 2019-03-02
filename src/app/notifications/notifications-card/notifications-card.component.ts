import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications-card',
  templateUrl: './notifications-card.component.html',
  styleUrls: ['./notifications-card.component.css']
})
export class NotificationsCardComponent implements OnInit {
  @Input() notName: string;
  @Input() notImage: string;
  @Input() notIssue: string;
  @Input() notDate: any;
  convertedDate: any;


  constructor() { }

  ngOnInit() {
    this.convertedDate = this.notDate.toDate();
  }

}
