import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-result-idea',
  templateUrl: './search-result-idea.component.html',
  styleUrls: ['./search-result-idea.component.css']
})
export class SearchResultIdeaComponent implements OnInit {
  @Input() ideaTitle: string;
  @Input() ideaLocation: string;
  @Input() ideaImage: string;
  @Input() ideaAuthorName: string;
  @Input() ideaDate: any;
  @Input() ideaHashtags: string[];
  @Input() ideaID: string;
  convertedDate: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.convertedDate = this.ideaDate.toDate();
  }

}
