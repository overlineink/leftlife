import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idea-video',
  templateUrl: './idea-video.component.html',
  styleUrls: ['./idea-video.component.css']
})
export class IdeaVideoComponent implements OnInit {
  @Input() ideaVideo: string;

  constructor() { }

  ngOnInit() {
  }

}
