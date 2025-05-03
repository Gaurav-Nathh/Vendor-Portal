import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../services/shared/shared.service';

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

  sidebarStyle: 'shrink' | 'overlay' = 'shrink';

  constructor(private sidebarService: SharedService) {}

  onPortalToggle() {
    if (!this.enablePortal) {
      this.portalUrl = '';
    }
  }
  onStyleChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as
      | 'shrink'
      | 'overlay';
    this.sidebarStyle = value;
    this.sidebarService.setSidebarStyle(value);
  }
}
