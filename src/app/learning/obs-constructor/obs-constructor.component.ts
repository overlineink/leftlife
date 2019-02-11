import { Component, OnInit } from '@angular/core';
import { Observable, Unsubscribable } from 'rxjs';
import { ObservablesService } from '../observables.service';

@Component({
  selector: 'app-obs-constructor',
  templateUrl: './obs-constructor.component.html',
  styleUrls: ['./obs-constructor.component.css']
})
export class ObsConstructorComponent implements OnInit {
  sequence$: Observable<Unsubscribable> = new Observable(this.sequenceSubscriber);

    /* Observable handler is created in observable service
    myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.log('Observer got an error ' + err),
      complete: () => console.log('Observer got a complete notification ')
    }; */

  sequenceSubscriber(observer): Unsubscribable {
    observer.next(4);
    observer.next(5);
    observer.next(6);
    observer.complete();
    return {
      unsubscribe() {}
    };
  }

  constructor(
    private obsSer: ObservablesService
  ) { }

  ngOnInit() {
    this.sequence$.subscribe(this.obsSer.myObserver);
  }

}
