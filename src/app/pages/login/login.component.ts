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
     this.authService.login();
     this.userService.setUserType(this.userType);
     const route = this.userType === 'customer' ? '/customer' : '/vendor';
    this.router.navigate(['/vendor']);
  }
}
