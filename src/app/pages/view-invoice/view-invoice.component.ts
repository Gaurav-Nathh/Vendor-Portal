import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewInvoiceService } from '../../services/view-invoice.service';
import { Sale } from '../../Models/view-invoice.model';

@Component({
  selector: 'app-view-invoice',
  imports: [RouterModule, CommonModule],
  templateUrl: './view-invoice.component.html',
  styleUrl: './view-invoice.component.scss'
})
export class ViewInvoiceComponent {

  sales: Sale[] = [];

  constructor(private viewInvoiceService: ViewInvoiceService) {}

   ngOnInit(): void {
    this.viewInvoiceService.getSaleList().subscribe({
      next: (response) => {
        this.sales = response.Sale;
      },
      error: (err) => {
        console.error('Failed to load sales:', err);
      }
    });
  }
}
