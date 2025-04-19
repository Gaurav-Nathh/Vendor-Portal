import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf, ThemeToggleComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userType = 'vendor';
  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  model = {
    email: '',
    password: '',
  };
  hidepassword: boolean = true;

  ngOnInit(): void {
    this.themeService.initTheme();
  }

  onLogin(): void {
    // Simulate login
    localStorage.setItem('token', 'user-token'); // Store a token
    this.router.navigate(['/dashboard']); // Navigate to the dashboard
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  get isDarkMode(): boolean {
    return this.themeService.getCurrentTheme() === 'dark-theme';
  }

  togglePassword() {
    this.hidepassword = !this.hidepassword;
  }

  onSubmit(form: NgForm) {
    console.log('login');
    this.authService.login();
    this.userService.setUserType(this.userType);
    const route = this.userType === 'customer' ? '/customer' : '/vendor';
    console.log(route);
    this.router.navigate([route]);
  }
}
