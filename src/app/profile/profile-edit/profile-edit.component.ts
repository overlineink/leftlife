import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  user: User;
  onLogoutSuccess() {
    // this.router.navigateByUrl('/home');
}

  constructor(
    public authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.authService.getUserID();
  }

}
