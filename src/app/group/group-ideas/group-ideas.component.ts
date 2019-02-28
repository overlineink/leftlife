import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea } from 'src/app/core/models/idea.model';

@Component({
  selector: 'app-group-ideas',
  templateUrl: './group-ideas.component.html',
  styleUrls: ['./group-ideas.component.css']
})
export class GroupIdeasComponent implements OnInit {
  @Input() subIdeas$: Observable<Idea[]>;


  constructor() { }

  ngOnInit() {
  }

}
