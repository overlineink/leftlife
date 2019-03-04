import { Component, OnInit } from '@angular/core';
import { GroupsService } from '@group/groups.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '@core/auth.service';
import { User } from '@profile/user.model';

@Component({
  selector: 'app-upload-form-group',
  templateUrl: './upload-form-group.component.html',
  styleUrls: ['./upload-form-group.component.css']
})
export class UploadFormGroupComponent implements OnInit {
  // uploadGroupForm attributes
  uploadGroupForm: FormGroup;
  groupTitle: string;
  groupLevel: string;
  groupLeader: string;

  // user attributes
  user: User;
  u: any;
  userID: string;

  constructor(
    private groupsService: GroupsService,
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    // calls getUser() to get a user$
    this.user = this.authService.getUser();
    // subscribes to user$ and retrieves uid, email, photoURL
    this.authService.getUserID();
    // toDo: Get the full user data


    this.uploadGroupForm = this.formBuilder.group({
      'groupTitle': {value: ''},
      'groupLevel': {value: ''},
      'groupLeader': {value: ''},
    });
  }

  // gets the value of the form
  get getGroupTitle() {
    return this.uploadGroupForm.get('groupTitle');
  }
  get getGroupLevel() {
    return this.uploadGroupForm.get('groupLevel');
  } get getGroupLeader() {
    return this.uploadGroupForm.get('groupLeader');
  }

  addGroup() {
    this.groupTitle = this.getGroupTitle.value;
    this.groupLevel = this.getGroupTitle.value;
    this.groupLeader = this.getGroupTitle.value;

    if (this.groupTitle !== '') {
      this.groupsService.addGroup(this.groupTitle, this.groupLevel, this.groupLeader);
    }/*
    console.log(this.groupTitle, this.groupLevel, this.groupLeader);
    this.userID = this.authService.getID();
    console.log(this.authService.user.email);*/
  }

}
