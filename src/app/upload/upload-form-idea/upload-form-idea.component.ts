import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IdeasService } from '@idea/ideas.service';
import { Observable } from 'rxjs';
import { User } from '@profile/user.model';
import { AuthService } from '@core/auth.service';
import { UploadIdeaService } from '@upload/upload-idea.service';

@Component({
  selector: 'app-upload-form-idea',
  templateUrl: './upload-form-idea.component.html',
  styleUrls: ['./upload-form-idea.component.css']
})
export class UploadFormIdeaComponent implements OnInit {
  // user attributes
  user$: Observable<User>;

  // uploadideaForm attributes
  uploadIdeaForm: FormGroup;
  ideaTitle: string;
  ideaSubtitle: string;
  ideaText: string;
  ideaReason: string;
  ideaVideoURL: string;
  ideaImageURL: string;
  ideaHashtags: string[];
  ideaDate: Date;
  inputHashtagsPlaceholder: string;
  editMode = true;


  constructor(
    private uploadIdeaService: UploadIdeaService,
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) {
      this.user$ = this.authService.getUser();
     }

  ngOnInit() {
    this.uploadIdeaForm = this.formBuilder.group({
      'ideaTitle': {value: ''},
      'ideaSubtitle': {value: ''},
      'ideaText': {value: ''},
      'ideaReason': {value: ''},
    });
    this.ideaHashtags = [];
    this.inputHashtagsPlaceholder = 'Add Hashtags';
  }

  // gets the value of the form
  get getIdeaTitle() {
    return this.uploadIdeaForm.get('ideaTitle');
  }
  get getIdeaSubtitle() {
    return this.uploadIdeaForm.get('ideaSubtitle');
  }
  get getIdeaText() {
    return this.uploadIdeaForm.get('ideaText');
  }
  get getIdeaReason() {
    return this.uploadIdeaForm.get('ideaReason');
  }

  addIdea() {
    this.ideaTitle = this.getIdeaTitle.value;
    this.ideaSubtitle = this.getIdeaSubtitle.value;
    this.ideaText = this.getIdeaText.value;
    this.ideaReason = this.getIdeaReason.value;

    this.ideaDate = new Date();

    if (this.ideaTitle !== '') {
      this.user$.subscribe(user => {
        this.uploadIdeaService.addIdea(
          this.ideaTitle,
          this.ideaSubtitle,
          this.ideaImageURL,
          this.ideaVideoURL,
          this.ideaText,
          this.ideaReason,
          this.ideaHashtags,
          this.ideaDate,

          0,
          0,
          0,

          user
        );

      });

    }
  }

  assignImageUrl(url) {
    this.ideaImageURL = url;
  }

  assignVideoUrl(url) {
    this.ideaVideoURL = url;
  }

}

