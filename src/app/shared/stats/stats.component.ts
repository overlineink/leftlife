import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() label1: string;
  @Input() number1: string;
  @Input() label2: string;
  @Input() number2: string;
  @Input() label3: string;
  @Input() number3: string;

  constructor() { }

  ngOnInit() {
  }

}
