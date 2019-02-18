import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-header',
  templateUrl: './idea-header.component.html',
  styleUrls: ['./idea-header.component.css']
})
export class IdeaHeaderComponent implements OnInit {
  collapsed: boolean;

  constructor() { }

  ngOnInit() {
  }

}
