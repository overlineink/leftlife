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
  // static attributes of every profile
  ideas: string;
  follower: string;
  following: string;

  // attributes of the requested profile
  profileOwner$: Observable<User>;

  // user attributes
  user$: Observable<User>;

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
    this.user$ = this.authService.getUser();

    // retrieves the user id from the URL and requests the fitting user doc
    this.profileOwner$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getPerson(params.get('id')),
      )
    );
  }

}
