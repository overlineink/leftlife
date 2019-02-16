import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile.interface';

@Component({
  selector: 'app-search-persons',
  templateUrl: './search-persons.component.html',
  styleUrls: ['./search-persons.component.css']
})
export class SearchPersonsComponent implements OnInit {
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
