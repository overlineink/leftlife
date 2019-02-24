import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-stream',
  templateUrl: './group-stream.component.html',
  styleUrls: ['./group-stream.component.css']
})
export class GroupStreamComponent implements OnInit {
  tasks: boolean;
  comment: boolean;

  constructor() { }

  ngOnInit() {
    this.tasks = true;
    this.comment = true;
  }

}
