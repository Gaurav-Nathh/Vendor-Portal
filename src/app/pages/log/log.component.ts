import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';
import { ThemeService } from '../../services/theme.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  imports: [FormsModule, NgIf, NgClass, ThemeToggleComponent],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss',
})
export class LogComponent {
  loginModel = {
    email: '',
    password: '',
    userType: '',
  };
  hidePassword: boolean = true;
  showPasswordField = false;

  images = [
    {
      src: '/assets/images/vendor_loginpage_img_1.svg',
      text: 'Welcome to our platform!',
    },
    {
      src: '/assets/images/vendor_loginpage_img_2.svg',
      text: 'Enjoy the best experience!',
    },
  ];

  currentImage = 0;
  progress = 50;

  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextStep() {
    this.showPasswordField = true;
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    this.authService.login();
    this.userService.setUserType(this.loginModel.userType);
    const route =
      this.loginModel.userType === 'customer' ? '/customer' : '/vendor';
    this.router.navigate([route]);
  }

  nextSlide() {
    this.currentImage = (this.currentImage + 1) % this.images.length;
    this.progress = (this.currentImage + 1) * 50;
  }
}
