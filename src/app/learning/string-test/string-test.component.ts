import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-test',
  templateUrl: './string-test.component.html',
  styleUrls: ['./string-test.component.css']
})
export class StringTestComponent implements OnInit {

  constructor() { }

  stringTest(name: string): string {
    return 'Welcome ' + name;
  }

  arrayTest(): string[] {
    return ['EUR', 'USD', 'AUD'];
  }

  ngOnInit() {
    this.stringTest('Tobi');
    this.arrayTest();

  }

}
