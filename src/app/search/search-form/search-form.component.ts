import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  hashtags: string[];
  inputHashtagsPlaceholder: string;
  editMode = true;


  constructor() { }

  ngOnInit() {
    this. hashtags = [];
    this.inputHashtagsPlaceholder = 'Search for Hashtags';
  }

}
