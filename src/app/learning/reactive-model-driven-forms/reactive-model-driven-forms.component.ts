import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-reactive-model-driven-forms',
  templateUrl: './reactive-model-driven-forms.component.html',
  styleUrls: ['./reactive-model-driven-forms.component.css']
})
export class ReactiveModelDrivenFormsComponent implements OnInit {
  searches: string[] = [];

  searchField: FormControl;

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(term => {
        this.searches.push(term);
      });
  }

}
