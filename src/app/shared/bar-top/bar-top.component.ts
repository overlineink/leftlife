import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-top',
  templateUrl: './bar-top.component.html',
  styleUrls: ['./bar-top.component.css']
})
export class BarTopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
