import { Component, OnInit } from '@angular/core';
import { GroupsService } from '@group/groups.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '@core/auth.service';
import { User } from '@profile/user.model';
import { Observable } from 'rxjs';

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
  user$: Observable<User>;
  user: any;
  u: any;
  userID: string;

  constructor(
    private groupsService: GroupsService,
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) {
          // calls getUser() to get a user$
    this.user$ = this.authService.getUser();
    // subscribes to user$ and retrieves uid, email, photoURL
    this.authService.getUserID();
    // toDo: Get the full user data
     }

  ngOnInit() {
    this.user = this.test;


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
    this.user = this.authService.getUserID();
    console.log(this.authService.user.email);
    console.log(this.authService.user.uid);
    console.log(this.user.photoURL);
    console.log(this.user.displayName);
    console.log(this.user.local);
*/
  }

  test() {
    this.groupTitle = this.getGroupTitle.value;
    this.groupLevel = this.getGroupTitle.value;
    this.groupLeader = this.getGroupTitle.value;

    this.user$.subscribe(
      user$ => {
        console.log(user$.email);
        console.log(user$.local);
        this.add(user$.profilePhoto, this.groupLevel, this.groupLeader);
      }
    );
  }

  add(title: string,
    image: string,
    leader: string) {
    console.log('click');
    this.groupsService.addGroup(title, image, leader);
  }

}
