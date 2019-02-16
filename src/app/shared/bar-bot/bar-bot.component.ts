import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-bot',
  templateUrl: './bar-bot.component.html',
  styleUrls: ['./bar-bot.component.css']
})
export class BarBotComponent implements OnInit {
  @Input() groupNotifications: number;
  @Input() notifications: number;
  @Input() messages: number;
  @Input() myGroup: string;
  @Input() myProfile: string;

  constructor() { }

  ngOnInit() {
    this.groupNotifications = 5;
    this.notifications = 3;
    this.messages = 5;
    this.myGroup = 'rosbach';
    this.myProfile = 'profile';
  }
}
