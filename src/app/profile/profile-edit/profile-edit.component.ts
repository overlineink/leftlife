import { Component, OnInit } from '@angular/core';
import { User } from '@profile/user.model';
import { AuthService } from '@core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  onLogoutSuccess() {
    // this.router.navigateByUrl('/home');
}

  constructor(
    public authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.authService.getUser();
    this.authService.getUserID();
  }

}
