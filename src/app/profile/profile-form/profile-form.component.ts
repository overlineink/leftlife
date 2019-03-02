import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from '@core/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '@profile/user.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  user: User;

  @Output() editMode: boolean;
  editButton: string;

  editForm: FormGroup;
  local: string;
  regional: string;
  federal: string;
  continental: string;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    public afs: AngularFirestore,
  ) {
   }

  ngOnInit() {
    this. user = this.authService.getUser();

    this.editForm = this.fb.group({
      'federal': {value: '', disabled: true},
      'local': {value: '', disabled: true},
      'regional': {value: '', disabled: true},
      'email': {value: '', disabled: true},
      'continental': {value: '', disabled: true}
    });
    this.editButton = 'Edit';
    this.editMode = false;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (this.editMode === true) {
      this.editForm.enable();
      this.editButton = 'Save';
    } else {
      this.updateUser();
      this.editForm.disable();
      this.editButton = 'Edit';
    }
  }

  get getLocal() {
    return this.editForm.get('local');
  }
  get getRegional() {
    return this.editForm.get('regional');
  }
  get getFederal() {
    return this.editForm.get('federal');
  }
  get getContinental() {
    return this.editForm.get('continental');
  }

  updateUser() {
    this.local = this.getLocal.value;
    this.regional = this.getRegional.value;
    this.federal = this.getFederal.value;
    this.continental = this.getContinental.value;

    if (this.local !== '') {
      this.authService.updateUser({'local': this.local});
    }
    if (this.regional !== '') {
      this.authService.updateUser({'regional': this.regional});
    }
    if (this.federal !== '') {
      this.authService.updateUser({'federal': this.federal});
    }
    if (this.continental !== '') {
      this.authService.updateUser({'continental': this.continental});
    }
  }

}
