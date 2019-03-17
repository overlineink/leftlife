import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@core/auth.service';
import { Observable } from 'rxjs';
import { User } from '@profile/user.model';

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

  user$: Observable<User>;
  userID: string;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.getUser();
   }

  ngOnInit() {
    console.log('user id bot bar ' + this.user$);
    this.groupNotifications = 5;
    this.notifications = 3;
    this.messages = 5;
    this.myGroup = 'rosbach';
    this.myProfile = 'profile';
  }
}
