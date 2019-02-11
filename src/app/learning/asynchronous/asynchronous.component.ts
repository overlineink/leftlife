import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrls: ['./asynchronous.component.css']
})
export class AsynchronousComponent implements OnInit {

  constructor(private auth: AuthService) { }

  needsLogin: boolean;

  ngOnInit() {
    this.needsLogin = true;
    this.auth.getItem().then((authenticated) => {
      this.needsLogin = !authenticated;
    });
  }

}
