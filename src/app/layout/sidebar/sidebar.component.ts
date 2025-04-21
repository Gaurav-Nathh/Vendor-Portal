import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
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
  isOpen = true;

  menuItems: MenuItem[] = [
    {
      text: 'Dashboard',
      icon: 'bi-house',
      route: '/shopping-cart',
    },
    {
      text: 'Users',
      icon: 'bi-people',
      route: '/users',
      submenu: [
        { text: 'All Users', icon: 'bi-person', route: '/users/all' },
        { text: 'Roles', icon: 'bi-shield', route: '/users/roles' },
      ],
      isSubmenuOpen: false,
    },
    {
      text: 'Settings',
      icon: 'bi-gear',
      route: '/settings',
      submenu: [
        { text: 'General', icon: 'bi-sliders', route: '/settings/general' },
        { text: 'Security', icon: 'bi-lock', route: '/settings/security' },
      ],
      isSubmenuOpen: false,
    },
  ];

  constructor(private router: Router) {}

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
      // Prevent navigation when toggling submenu
      event.preventDefault();
    }
  }
}
