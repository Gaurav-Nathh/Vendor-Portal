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
  isSubmenuOpen?: boolean;
  submenu?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, NgbTooltipModule],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  currentMenu: MenuItem[] = [];
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  isOpen = false;

  ngOnInit() {
    const userType = this.userService.getUserType();
    this.currentMenu =
      userType === 'vendor' ? this.vendorMenu : this.customerMenu;
  }

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  toggleSubmenu(item: MenuItem, event: Event) {
    if (item.submenu) {
      item.isSubmenuOpen = !item.isSubmenuOpen;
      event.preventDefault();
    }
  }

  vendorMenu: MenuItem[] = [
    {
      text: 'Dashboard',
      icon: 'bi bi-grid-1x2-fill',
      route: '/vendor/',
    },

    {
      text: 'Item Mapping',
      icon: 'fa fa-box sidebar-icon',
      route: '/vendor/item-mapping',
    },

    {
      text: 'Purchase Orders',
      icon: 'fa-solid fa-rectangle-list',
      route: '/vendor/purchase-order',
    },
    {
      text: 'Invoice',
      icon: 'fa-solid fa-file-lines',
      route: '/vendor/shopping-cart',
    },
    {
      text: 'Goods Receipts',
      icon: 'fa-solid fa-receipt',
      route: '/vendor/shopping-cart',
    },
    {
      text: 'Payment',
      icon: 'bi bi-credit-card-2-back-fill',
      route: '/vendor/shopping-cart',
      isSubmenuOpen: false,
      submenu: [
        {
          text: 'Pending',
          icon: 'fa-solid fa-hourglass-half',
          route: '/vendor/shopping-cart',
        },
        {
          text: 'History',
          icon: 'fa-solid fa-clock-rotate-left',
          route: '/vendor/shopping-cart',
        },
      ],
    },
    {
      text: 'Statements',
      icon: 'fa-solid fa-file-invoice-dollar',
      route: '/vendor/shopping-cart',
    },
  ];

  customerMenu: MenuItem[] = [
    {
      text: 'Dashboard',
      icon: 'bi bi-grid-1x2-fill',
      route: '/vendor/shopping-cart',
    },

    {
      text: 'Item Mapping',
      icon: 'fa fa-box sidebar-icon"',
      route: '/vendor/item-mapping',
    },

    {
      text: 'Purchase Orders',
      icon: 'bi bi-grid-1x2-fill',
      route: '/vendor/purchase-order',
    },
    {
      text: 'Invoice',
      icon: 'fa-solid fa-cart-shopping',
      route: '/vendor/shopping-cart',
    },
    {
      text: 'Goods Receipts',
      icon: 'fa-solid fa-cart-shopping',
      route: '/vendor/shopping-cart',
    },
    {
      text: 'Payment',
      icon: 'bi-people-fill',
      route: '/vendor/',
      isSubmenuOpen: false,
      submenu: [
        { text: 'Pending', icon: 'bi-person', route: '/vendor/' },
        { text: 'History', icon: 'bi-shield', route: '/vendor/' },
      ],
    },
    {
      text: 'Account Statement',
      icon: 'bi-gear-fill',
      route: '/vendor/',
    },
  ];

  commonMenu = [
    {
      text: 'My Profile',
      icon: 'fa-solid fa-circle-user',
      route: '/vendor/shopping-cart',
    },
    {
      text: 'Password',
      icon: 'fa-solid fa-lock',
      route: '/vendor/update-password',
    },
    {
      text: 'Logout',
      icon: 'fa-solid fa-power-off',
      route: '/vendor/update-password',
    },
  ];
}
