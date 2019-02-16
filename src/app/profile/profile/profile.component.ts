import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  ideas: string;
  follower: string;
  following: string;

  editProfile() {
    this.router.navigateByUrl('/editprofile');
  }


  constructor(
    private router: Router,
    public authService: AuthService) {
      this.ideas = 'Ideas';
      this.follower = 'Follower';
      this.following = 'Following';
    }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.authService.getUserID();
  }

}
