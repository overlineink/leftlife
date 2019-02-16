import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    public authService: AuthService
  ) { }
}
