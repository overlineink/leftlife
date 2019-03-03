import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/core/models/event.model';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Idea } from 'src/app/core/models/idea.model';
import { IdeasService } from 'src/app/core/services/ideas.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  idea$: Observable<Idea>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ideasService: IdeasService
  ) {  }

  ngOnInit() {
    // extracts the id from the URL and queries the fitting document
    this.idea$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.ideasService.getIdea(params.get('id')))
    );

    // this.idea$ = this.ideasService.getIdea('Fq8S8PpATT3PID84dE88');
  }

}
