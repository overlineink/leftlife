import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  myObserver = {
    next: x => void(console.log('Observer got a next value: ' + x)),
    error: err => void(console.log('Observer got an error ' + err)),
    complete: () => void(console.log('Observer got a complete notification '))
  };

  constructor() { }
}
