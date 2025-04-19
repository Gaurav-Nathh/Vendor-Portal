import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, NgbTooltipModule],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isCollapsed = false;
  openMenus: { [key: string]: boolean } = {
    products: false,
    sales: false,
    //  NgbModule,
    // NgbTooltipModule,
    reports: false,
  };

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    // Close all menus when collapsing
    if (this.isCollapsed) {
      Object.keys(this.openMenus).forEach((key) => {
        this.openMenus[key] = false;
      });
    }
  }

  toggleMenu(menu: string) {
    this.openMenus[menu] = !this.openMenus[menu];

    // Close other menus when opening a new one (optional)
    if (this.openMenus[menu]) {
      Object.keys(this.openMenus).forEach((key) => {
        if (key !== menu) {
          this.openMenus[key] = false;
        }
      });
    }
  }
}
