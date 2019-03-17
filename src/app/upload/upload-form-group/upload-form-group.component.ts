import { Component, OnInit } from '@angular/core';
import { GroupsService } from '@group/groups.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '@core/auth.service';
import { User } from '@profile/user.model';
import { Observable } from 'rxjs';
import { UploadGroupService } from '@upload/upload-group.service';

@Component({
  selector: 'app-upload-form-group',
  templateUrl: './upload-form-group.component.html',
  styleUrls: ['./upload-form-group.component.css']
})
export class UploadFormGroupComponent implements OnInit {
  // user attributes
  user$: Observable<User>;

  // uploadGroupForm attributes
  uploadGroupForm: FormGroup;
  groupTitle: string;
  groupImageURL: string;
  groupLeader: string;
  groupHashtags: string[];
  groupDate: Date;
  inputHashtagsPlaceholder: string;
  editMode = true;

  groupEmail: string;
  groupPhone: string;

  constructor(
    private uploadGroupService: UploadGroupService,
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) {
      this.user$ = this.authService.getUser();
    }

  ngOnInit() {
    this.uploadGroupForm = this.formBuilder.group({
      'groupTitle': {value: ''},
      'groupEmail': {value: ''},
      'groupPhone': {value: ''}
    });
    this.groupHashtags = [];
    this.inputHashtagsPlaceholder = 'Add Hashtags';
  }

  // gets the value of the form
  get getGroupTitle() {
    return this.uploadGroupForm.get('groupTitle');
  }
  get getGroupEmail() {
    return this.uploadGroupForm.get('groupEmail');
  }
  get getGroupPhone() {
    return this.uploadGroupForm.get('groupPhone');
  }

  addGroup() {
    this.groupTitle = this.getGroupTitle.value;
    this.groupEmail = this.getGroupEmail.value;
    this.groupPhone = this.getGroupPhone.value;
    this.groupDate = new Date();


    if (this.groupTitle !== '') {
      this.user$.subscribe(user => {
        this.uploadGroupService.addGroup(
          this.groupTitle,
          this.groupImageURL,
          this.groupHashtags,
          this.groupDate,

          user,

          1,
          0,
          0,
          0,

          this.groupEmail,
          this.groupPhone
        );
      });
    }
  }

  assignImageUrl(url) {
    this.groupImageURL = url;
  }

}
