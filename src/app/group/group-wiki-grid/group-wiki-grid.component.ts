import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/core/models/group.model';
import { TileA } from 'src/app/search/tile.interface';

@Component({
  selector: 'app-group-wiki-grid',
  templateUrl: './group-wiki-grid.component.html',
  styleUrls: ['./group-wiki-grid.component.css']
})
export class GroupWikiGridComponent implements OnInit {
  group: Group;
  tiles: TileA[] = [
    {text: 'One', cols: 1, rows: 1 },
    {text: 'Two', cols: 1, rows: 1 },
    {text: 'Three', cols: 1, rows: 1 },
    {text: 'Four', cols: 1, rows: 1 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
