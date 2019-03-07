import { Component, OnInit, Input } from '@angular/core';
import { ProfileFollowService } from '../profile-follow.service';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {
  followState: any;
  followButton: string;

  constructor(private followService: ProfileFollowService) { }

  async ngOnInit() {
    this.followState = await this.followService.checkFollow('CSoYMI9JNQeytXEj3Ofhia8YRlH3', 'vidhishaID');
    if (this.followState === true) {
      this.followButton = 'Unfollow';
    } else {
      this.followButton = 'Follow';
    }
  }

  toggleFollowState() {
    this.followState = !this.followState;
    if (this.followState === true) {
      this.followButton = 'Follow';
      this.unfollow();
    } else {
      this.followButton = 'Unfollow';
      this.follow();
    }
  }

  follow(): void {
    console.log('follow');
    this.followService.addFollow(
      // ID of the followed user
      'CSoYMI9JNQeytXEj3Ofhia8YRlH3',
      // follower ID and attributes
      'vidhishaID',
      'Vidhisha',
      'https://firebasestorage.googleapis.com/v0/b/leftlife1-e07e0.appspot.com/o/test%2F1551352829982_IMG_20170829_210135_785.jpg?alt=media&token=a5f41020-4f8e-452f-8411-72b1f6118da3',
      );
  }

  unfollow(): void {
    this.followService.deleteFollow(
       // ID of the followed user
      'CSoYMI9JNQeytXEj3Ofhia8YRlH3',
      // follower ID
      'vidhishaID'
      );
    console.log('unfollow');
  }

}
