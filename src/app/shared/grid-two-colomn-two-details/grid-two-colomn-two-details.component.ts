import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-two-colomn-two-details',
  templateUrl: './grid-two-colomn-two-details.component.html',
  styleUrls: ['./grid-two-colomn-two-details.component.css']
})
export class GridTwoColomnTwoDetailsComponent implements OnInit {
  @Input() photoDetailArray: any;

  constructor() { }

  ngOnInit() {
  }

}
