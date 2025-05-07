import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedService } from '../../services/shared/shared.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-update-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.scss',
})
export class UpdateProfileComponent {
  enablePortal: boolean = false;
  enableProfileEditing: boolean = false;
  enablePurchaseOrderCreation: boolean = false;
  enableManualInvoiceGeneration: boolean = false;
  portalUrl: string = '';
  sideNavStyle: string = '';
  theme: string = '';

  constructor(
    private sidebarService: SharedService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    // this.theme = this.themeService.getCurrentTheme();
    // console.log(this.theme);
    // this.sideNavStyle = this.sidebarService.getCurrentSidebarStyle();
  }

  onPortalToggle() {
    if (!this.enablePortal) {
      this.portalUrl = '';
    }
  }
  onSubmit(form: NgForm) {
    console.log(this.sideNavStyle);
    this.sidebarService.setSidebarStyle(this.sideNavStyle);
  }
}
