import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class User {
  constructor(
    public email: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.css']
})
export class ComponentTestComponent implements OnInit {
  @Input() enabled = true;
  @Output() loggedIn = new EventEmitter<User>();

  constructor() { }

  login(email: string, password: string) {
    console.log(`Login ${email} ${password}`);
    if (email && password) {
      console.log('Emitting');
      this.loggedIn.emit(new User(email, password));
    }
  }

  ngOnInit() {
  }

}
