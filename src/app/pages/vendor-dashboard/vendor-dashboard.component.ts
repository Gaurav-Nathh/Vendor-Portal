import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VendorServiceFileService } from '../../services/vendor-service/vendor-service-file.service';

@Component({
  selector: 'app-vendor-dashboard',
  imports: [CommonModule,RouterModule],
  templateUrl: './vendor-dashboard.component.html',
  styleUrl: './vendor-dashboard.component.scss'
})
export class VendorDashboardComponent {



  currentView = 'all';
  filteredOrders: any[] = [];

  

  constructor(public VendorService:VendorServiceFileService) {
    this.filteredOrders = this.VendorService.vendors ;
  }

  ngOnInit(): void {
   this.VendorService.addVendor();
  }


  getStatusClass(status: string): string {
    return status.toLowerCase();
  }

  getFilteredVendors() {
    return this.VendorService.vendors.filter(vendor => vendor.code && vendor.code.trim() !== '');
  }

}
