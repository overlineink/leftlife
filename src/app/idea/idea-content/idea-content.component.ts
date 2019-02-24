import { Component, OnInit, Input } from '@angular/core';
import { K } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-idea-content',
  templateUrl: './idea-content.component.html',
  styleUrls: ['./idea-content.component.css']
})
export class IdeaContentComponent implements OnInit {
  collapsed: boolean;
  @Input() ideaText: string;
  @Input() ideaReason: string;

  constructor() { }

  ngOnInit() {
  }

}
