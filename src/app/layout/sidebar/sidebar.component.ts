import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
interface MenuItem {
  text: string;
  icon: string;
  route: string;
  submenu?: MenuItem[];
  isSubmenuOpen?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, NgbTooltipModule],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}
  isOpen = true;

  menuItems: MenuItem[] = [
    {
      text: 'Dashboard',
      icon: 'bi bi-grid-1x2-fill',
      route: 'vendor/dashboard',
    },
    {
      text: 'Purchase Order',
      icon: 'bi bi-grid-1x2-fill',
      route: 'vendor/purchase-order',
    },
    {
      text: 'Shopping',
      icon: 'fa-solid fa-cart-shopping',
      route: 'vendor/shopping-cart',
    },
    {
      text: 'Users',
      icon: 'bi-people-fill',
      route: '/users',
      submenu: [
        { text: 'All Users', icon: 'bi-person', route: '/users/all' },
        { text: 'Roles', icon: 'bi-shield', route: '/users/roles' },
      ],
      isSubmenuOpen: false,
    },
    {
      text: 'Settings',
      icon: 'bi-gear-fill',
      route: '/settings',
      submenu: [
        { text: 'General', icon: 'bi-sliders', route: '/settings/general' },
        { text: 'Security', icon: 'bi-lock', route: '/settings/security' },
      ],
      isSubmenuOpen: false,
    },
  ];

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  navigate(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  toggleSubmenu(item: MenuItem, event: Event) {
    if (item.submenu) {
      item.isSubmenuOpen = !item.isSubmenuOpen;
      event.preventDefault();
    }
  }

  gotodash() {
    this.router.navigate(['/vendor/dashboard']);
  }
}
