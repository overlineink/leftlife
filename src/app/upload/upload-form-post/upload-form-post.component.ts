import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostService } from '@post/post.service';
import { Observable } from 'rxjs';
import { User } from '@profile/user.model';
import { AuthService } from '@core/auth.service';
import { UploadPostService } from '@upload/upload-post.service';

@Component({
  selector: 'app-upload-form-post',
  templateUrl: './upload-form-post.component.html',
  styleUrls: ['./upload-form-post.component.css']
})
export class UploadFormPostComponent implements OnInit {
  // uploadPostForm attributes
  user$: Observable<User>;
  uploadPostForm: FormGroup;
  postText: string;
  postDate: Date;

  hashtags: string[];
  inputHashtagsPlaceholder: string;
  editMode = true;

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private uploadPostService: UploadPostService
    ) {
      this.user$ = this.authService.getUser();
     }

  ngOnInit() {
    this.uploadPostForm = this.formBuilder.group({
      'postText': {value: ''},
    });
    this. hashtags = [];
    this.inputHashtagsPlaceholder = 'Add Hashtags';
  }

  // gets the value of the form
  get getPostText() {
    return this.uploadPostForm.get('postText');
  }

  addPost() {
    this.postText = this.getPostText.value;

    this.postDate = new Date();
    console.log(this.postDate);
    console.log('clicked');

    if (this.postText !== '') {
      console.log('data');
      this.user$.subscribe(user => {
        this.uploadPostService.addPost(
          user.uid,
          user.displayName,
          user.profilePhoto,
          this.postText,
          this.hashtags,
          'postImage', // include upload Photo
          this.postDate // get Time
        );
      });
    }
  }

}

