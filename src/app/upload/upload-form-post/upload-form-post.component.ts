import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostService } from '@post/post.service';

@Component({
  selector: 'app-upload-form-post',
  templateUrl: './upload-form-post.component.html',
  styleUrls: ['./upload-form-post.component.css']
})
export class UploadFormPostComponent implements OnInit {
  // uploadPostForm attributes
  uploadPostForm: FormGroup;
  postText: string;
  postAuthor: string;
  postLocation: string;

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.uploadPostForm = this.formBuilder.group({
      'postText': {value: ''},
      'postAuthor': {value: ''},
      'postLocation': {value: ''},
    });
  }

  // gets the value of the form
  get getPostText() {
    return this.uploadPostForm.get('postText');
  }
  get getPostAuthor() {
    return this.uploadPostForm.get('postAuthor');
  } get getPostLocation() {
    return this.uploadPostForm.get('postLocation');
  }

  addPost() {
    this.postText = this.getPostText.value;
    this.postAuthor = this.getPostAuthor.value;
    this.postLocation = this.getPostLocation.value;

    if (this.postText !== '') {
      this.postService.addPost(this.postText, this.postAuthor, this.postLocation);
    }
  }

}

