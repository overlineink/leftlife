import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('');
  }
  // Asynchronous Code
  getItem(): Promise<boolean> {
    return Promise.resolve(!!localStorage.getItem('token'));
  }

  constructor() { }
}
