import { Component, OnInit } from '@angular/core';
import { Tile } from '@search/tile.interface';

@Component({
  selector: 'app-group-ideas',
  templateUrl: './group-ideas.component.html',
  styleUrls: ['./group-ideas.component.css']
})
export class GroupIdeasComponent implements OnInit {
  ideaimages: boolean;
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
    this.ideaimages = false;
  }

}
