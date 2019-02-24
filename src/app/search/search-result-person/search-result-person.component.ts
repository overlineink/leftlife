import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-person',
  templateUrl: './search-result-person.component.html',
  styleUrls: ['./search-result-person.component.css']
})
export class SearchResultPersonComponent implements OnInit {
  @Input() name: string;
  @Input() local: string;
  @Input() regional: string;
  @Input() federal: string;
  @Input() continental: string;
  @Input() profilePhoto: string;
  @Input() userRank: string;

  @Input() hashtags: string[];
  @Input() ideas: string;

  constructor() { }

  ngOnInit() {
  }

}
