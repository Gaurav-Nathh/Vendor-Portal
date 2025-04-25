import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  imports: [CommonModule,RouterModule],
  templateUrl: './vendor-dashboard.component.html',
  styleUrl: './vendor-dashboard.component.scss'
})
export class VendorDashboardComponent {



  currentView = 'all';
  filteredOrders: any[] = [];

  vendors = [
    {
      name: 'John Doe',
      vendorNumber: 'VND001',
      companyName: 'ABC Pvt Ltd',
      email: 'john.doe@example.com',
      workPhone: '+91-9876543210',
      payables: 50000,
    },
    {
      name: 'Jane Smith',
      vendorNumber: 'VND002',
      companyName: 'XYZ Ltd',
      email: 'jane.smith@example.com',
      workPhone: '+91-8765432109',
      payables: 75000,
    },
    {
      name: 'Alice Johnson',
      vendorNumber: 'VND003',
      companyName: 'LMN Corp',
      email: 'alice.johnson@example.com',
      workPhone: '+91-7654321098',
      payables: 60000,
    },
  ];

  constructor() {
    this.filteredOrders = this.vendors ;
  }



  getStatusClass(status: string): string {
    return status.toLowerCase();
  }


}
