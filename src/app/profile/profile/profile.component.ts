import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User, Person } from '@profile/user.model';
import { AuthService } from '@core/auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from '@profile/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ideas: string;
  follower: string;
  following: string;

  person$: Observable<User>;
  userEqualsProfile: boolean;
  followerState: boolean;

  editProfile() {
    this.router.navigateByUrl('/editprofile');
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService,
    private userService: UserService) {
      this.ideas = 'Ideas';
      this.follower = 'Follower';
      this.following = 'Following';
    }

  ngOnInit() {
    // retrieves the user id from the URL and requests the fitting user doc
    this.person$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getPerson(params.get('id')),
      )
    );
    // toDo: Get Follower Status
    this.followerState = true;

    // get's user data to compare if profile and user are equal
    this.authService.getUser();
    this.authService.getUserID();
  }

}
