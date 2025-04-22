import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // isAuthenticated = false;
  // constructor() {
  //   const storedAuth = localStorage.getItem('isAuthenticated');
  //   this.isAuthenticated = storedAuth === 'true';
  // }

  login() {
    localStorage.setItem('isAuthenticated', 'true');
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
}
