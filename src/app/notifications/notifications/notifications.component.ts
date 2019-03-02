import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

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
