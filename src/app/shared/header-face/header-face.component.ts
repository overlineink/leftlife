import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-face',
  templateUrl: './header-face.component.html',
  styleUrls: ['./header-face.component.css']
})
export class HeaderFaceComponent implements OnInit {
  @Input() name: string;
  @Input() local: string;
  @Input() regional: string;
  @Input() federal: string;
  @Input() continental: string;
  @Input() photoURL: string;
  constructor() { }

  ngOnInit() {
  }

}
