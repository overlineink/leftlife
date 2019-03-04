import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {
  @Input() followState: boolean;
  followButton: string;

  constructor() { }

  ngOnInit() {
    if (this.followState === true) {
      this.followButton = 'Follow';
    } else {
      this.followButton = 'Unfollow';
    }
  }

  toggleFollowState() {
    this.followState = !this.followState;
    if (this.followState === true) {
      this.followButton = 'Follow';
    } else {
      this.followButton = 'Unfollow';
    }
  }

}
