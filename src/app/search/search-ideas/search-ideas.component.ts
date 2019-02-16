import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile.interface';

@Component({
  selector: 'app-search-ideas',
  templateUrl: './search-ideas.component.html',
  styleUrls: ['./search-ideas.component.css']
})
export class SearchIdeasComponent implements OnInit {
  ideaimages: boolean;
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
