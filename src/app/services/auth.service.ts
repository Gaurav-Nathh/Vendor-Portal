import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
    console.log(localStorage.getItem('isAuthenticated') === 'true');
    return localStorage.getItem('isAuthenticated') === 'true';
  }
}
