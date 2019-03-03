import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@core/auth.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public authService: AuthService) {
    this.authService.getUser();
   }

  ngOnInit() {
  }

}
