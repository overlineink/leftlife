import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea, IdeaID } from '@idea/idea.model';

@Component({
  selector: 'app-group-ideas',
  templateUrl: './group-ideas.component.html',
  styleUrls: ['./group-ideas.component.css']
})
export class GroupIdeasComponent implements OnInit {
  @Input() subIdeas$: Observable<IdeaID[]>;


  constructor() { }

  ngOnInit() {
  }

}
