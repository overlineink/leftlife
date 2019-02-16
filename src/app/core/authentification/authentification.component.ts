import { Component, OnInit, Output } from '@angular/core';
import {AuthProvider, Theme} from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  themes = Theme;
  providers = AuthProvider;
  messageOnSuccess = 'Welcome at leftlife';

  onSuccessNavigate(): void {
    this.router.navigateByUrl('/profile');
  }
  printError(): void {
  }

  constructor(private router: Router) { }

  ngOnInit() {
    // this.router.navigateByUrl('/profile');
  }

}
