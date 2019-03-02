import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { AuthService } from '@core/auth.service';
import {MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'app-hashtags-edit',
  templateUrl: './hashtags-edit.component.html',
  styleUrls: ['./hashtags-edit.component.css']
})
export class HashtagsEditComponent implements OnInit, OnChanges {
  @Input() hashtags: string[];
  @Input() editMode: boolean;
  id: string;
  hashtag: string;

  visible = true;
  selectable = true;
  removable = false;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(public authService: AuthService) { }

  ngOnChanges() {
    if (this.editMode === true) {
      this.removable = true;
    } else {
      this.removable = false;
    }
  }

  ngOnInit() {
  }

  remove(hashtag: string): void {
    const index = this.hashtags.indexOf(hashtag);

    if (index >= 0) {
      this.hashtags.splice(index, 1);
      this.authService.updateUser({'hashtags': this.hashtags});
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our hashtag
    if ((value || '').trim()) {
      this.hashtags.push(value.trim());
      this.authService.updateUser({'hashtags': this.hashtags});

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

}
