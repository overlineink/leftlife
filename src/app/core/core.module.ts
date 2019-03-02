import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AuthService } from './auth.service';
import { throwIfAlreadyLoaded } from './module-import.guard';
@NgModule({
  providers: [
    AuthService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
