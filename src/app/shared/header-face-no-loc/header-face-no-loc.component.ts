import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-face-no-loc',
  templateUrl: './header-face-no-loc.component.html',
  styleUrls: ['./header-face-no-loc.component.css']
})
export class HeaderFaceNoLocComponent implements OnInit {
  @Input() name: string;
  @Input() subTitle: string;
  @Input() profilePhoto: string;
  constructor() { }

  ngOnInit() {
  }

}
