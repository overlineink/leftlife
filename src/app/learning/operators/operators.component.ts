import { Component, OnInit } from '@angular/core';
import { of, Observable, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ObservablesService } from '../observables.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  // Creating an observable of items
  myObservable$: Observable<number> = of(5, 9, 7);
  // A new function who maps an observable to a new observable and squares its values
  squaring = map((val: number) => val * val);
  squareAndTax = map((val: number) => val * 1.19);
  squareAndOdd = pipe(
    filter((val: number) => val % 2 !== 0),
    map ((val: number) => val * val)
  );
  // Proberty of a new Observable which becomes squared
  squaredObservables$: Observable<number> = this.squaring(this.myObservable$);
  taxedObservables$: Observable<number> = this.squareAndTax(this.squaredObservables$);
  oddedObservables$: Observable<number> = this.squareAndOdd(this.myObservable$);

  constructor(
    private obsSer: ObservablesService
  ) { }

  ngOnInit() {
    // subscribing to the squared obervable and log it
    this.squaredObservables$.subscribe(this.obsSer.myObserver);
    this.taxedObservables$.subscribe(this.obsSer.myObserver);
    this.oddedObservables$.subscribe(this.obsSer.myObserver);
  }

}
