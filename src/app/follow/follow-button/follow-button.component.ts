import { Component, OnInit, Input } from '@angular/core';
import { ProfileFollowService } from '@follow/profile-follow.service';
import { Observable } from 'rxjs';
import { User } from '@profile/user.model';
import { AuthService } from '@core/auth.service';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {
  // attributes of followed user
  @Input() followedUserID: string;
  @Input() followedUserName: string;
  @Input() followedUserImage: string;

  // user attributes (follower)
  @Input() followerID: string;
  @Input() followerName: string;
  @Input() followerImage: string;

  // followbutton attributes
  followState: any;
  followButton: string;

  constructor(private followService: ProfileFollowService) {}

  async ngOnInit() {
    console.log(this.followerID);
    console.log(this.followerName);
    console.log(this.followerImage);

    this.followState = await this.followService.checkFollow(this.followedUserID, this.followerID);

    if (this.followState === true) {
      this.followButton = 'Unfollow';
    } else {
      this.followButton = 'Follow';
    }
  }

  toggleFollowState() {
    if (this.followState === true) {
      this.followButton = 'Follow';
      this.deleteFollow();
    } else {
      this.followButton = 'Unfollow';
      this.addFollow();
    }
    this.followState = !this.followState;
  }

  addFollow(): void {
    console.log('follow');
      this.followService.addFollow(
        this.followedUserID,
        this.followedUserName,
        this.followedUserImage,

        this.followerID,
        this.followerName,
        this.followerImage,
        );
  }

  deleteFollow(): void {
    console.log('unfollow');
      this.followService.deleteFollow(
        this.followedUserID,
        this.followerID
      );
  }

}
