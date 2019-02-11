import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {

  constructor( private auth: AuthService) { }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }

  ngOnInit() {
  }

}
