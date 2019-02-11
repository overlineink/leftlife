import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent implements OnInit {

  constructor() { }

  firstTest(number: number): number {
    if (number < 0) {
      return 0;
    }
    console.log('The number is' + number);
    return number + 1;
  }

  ngOnInit() {
    this.firstTest(2);
  }

}
