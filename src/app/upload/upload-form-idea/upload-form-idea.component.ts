import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IdeasService } from '@idea/ideas.service';

@Component({
  selector: 'app-upload-form-idea',
  templateUrl: './upload-form-idea.component.html',
  styleUrls: ['./upload-form-idea.component.css']
})
export class UploadFormIdeaComponent implements OnInit {
  // uploadideaForm attributes
  uploadIdeaForm: FormGroup;
  ideaTitle: string;
  ideaText: string;
  ideaReason: string;

  constructor(
    private ideasService: IdeasService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.uploadIdeaForm = this.formBuilder.group({
      'ideaTitle': {value: ''},
      'ideaText': {value: ''},
      'ideaReason': {value: ''},
    });
  }

  // gets the value of the form
  get getIdeaTitle() {
    return this.uploadIdeaForm.get('ideaTitle');
  }
  get getIdeaText() {
    return this.uploadIdeaForm.get('ideaText');
  } get getIdeaReason() {
    return this.uploadIdeaForm.get('ideaReason');
  }

  addIdea() {
    this.ideaTitle = this.getIdeaTitle.value;
    this.ideaText = this.getIdeaText.value;
    this.ideaReason = this.getIdeaReason.value;

    if (this.ideaTitle !== '') {
      this.ideasService.addIdea(this.ideaTitle, this.ideaText, this.ideaTitle);
    }
  }

}

