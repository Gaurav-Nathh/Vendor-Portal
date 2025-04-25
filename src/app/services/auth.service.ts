import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // isAuthenticated = false;
  // constructor() {
  //   const storedAuth = localStorage.getItem('isAuthenticated');
  //   this.isAuthenticated = storedAuth === 'true';
  // }
  constructor(private router: Router) {}

  login() {
    localStorage.setItem('isAuthenticated', 'true');
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
}
