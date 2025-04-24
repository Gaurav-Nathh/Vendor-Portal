import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ThemeToggleComponent } from "../../components/theme-toggle/theme-toggle.component";

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
export class NavbarComponent {
  navItems: NavItem[] = [
    { icon: 'bi-house', label: 'Home', route: '/home' },
    { icon: 'bi-person', label: 'Profile', route: '/profile' },
    { icon: 'bi-gear', label: 'Settings', route: '/settings' },
    { icon: 'bi-box-arrow-right', label: 'Logout', route: '/logout' },
  ];

  constructor(private router: Router) {}

  toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('show');
    }
  }
}
