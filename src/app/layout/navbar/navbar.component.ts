import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';
import { UserService } from '../../services/user.service';

interface NavItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [ThemeToggleComponent],
})
export class NavbarComponent implements OnInit {
  greeting: string = '';
  userType: string = '';
  navItems: NavItem[] = [
    { icon: 'bi-house', label: 'Home', route: '/home' },
    { icon: 'bi-person', label: 'Profile', route: '/profile' },
    { icon: 'bi-gear', label: 'Settings', route: '/settings' },
    { icon: 'bi-box-arrow-right', label: 'Logout', route: '/logout' },
  ];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userType = this.userService.getUserType();
    const hour = new Date().getHours();

    if (hour < 12) {
      this.greeting = 'Good Morning';
    } else if (hour < 17) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Evening';
    }

    this.greeting += `, ${this.capitalize(this.userType)}`;
  }

  capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('show');
    }
  }
}
