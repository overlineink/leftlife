import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ObservablesService } from '../observables.service';

@Component({
  selector: 'app-oberservables',
  templateUrl: './oberservables.component.html',
  styleUrls: ['./oberservables.component.css']
})
export class OberservablesComponent implements OnInit {
  // Creating an Observable of items
  myObservable$: Observable<number> = of(1, 2, 3);
  save: number;

      /* Observable handler is created in observable service

  myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.log('Observer got an error ' + err),
    complete: () => console.log('Observer got a complete notification ')
  }; */

  // Creating an observer handler who saves the oberservables
  mySaver = {
    next: x => void(
      this.save = x,
      console.log('Saved as ' + this.save)),
    error: err => void(console.log('Something went wrong saving ' + err)),
    complete: () => void(console.log('last variable safed' + this.save)),
  };

  constructor(
    private obsSer: ObservablesService
  ) { }

  ngOnInit() {
    // Subscribe to both handlers
    this.myObservable$.subscribe(this.obsSer.myObserver);
    this.myObservable$.subscribe(this.mySaver);
  }

}
