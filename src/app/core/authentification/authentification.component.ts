import { Component, OnInit } from '@angular/core';
import {AuthProvider, Theme} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  themes = Theme;
  providers = AuthProvider;

  constructor() { }

  ngOnInit() {
  }

}
