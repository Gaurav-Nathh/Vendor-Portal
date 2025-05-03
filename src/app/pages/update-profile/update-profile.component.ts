import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.scss'
})
export class UpdateProfileComponent {
  enablePortal: boolean = false;
  enableProfileEditing: boolean = false;
  enablePurchaseOrderCreation: boolean = false;
  enableManualInvoiceGeneration: boolean = false;
  portalUrl: string = '';

  onPortalToggle() {
    if (!this.enablePortal) {
      this.portalUrl = '';
    }
  }
}
