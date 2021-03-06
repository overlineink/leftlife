import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(public authService: AuthService) {
    this.authService.getUser();
   }

  ngOnInit() {
  }

}
