import { Component } from '@angular/core';
import { Invoice } from '../../Models/invoice.model';
import { InvoiceService } from '../../services/shared/invoice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-dashboard',
  imports: [CommonModule],
  templateUrl: './invoice-dashboard.component.html',
  styleUrl: './invoice-dashboard.component.scss'
})
export class InvoiceDashboardComponent {

  invoices: Invoice[] = [];
  filteredInvoices: Invoice[] = [];
  searchTerm: string = '';

  filters = [
    { value: 'all', label: 'All' },
    { value: 'Paid', label: 'Paid' },
    { value: 'Partially Paid', label: 'Partial' },
    { value: 'Unpaid', label: 'Unpaid' }
  ];

  currentFilter: string = 'all';

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.invoices = this.invoiceService.getInvoices();
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredInvoices = this.invoices.filter(invoice => {
      const matchesStatus = this.currentFilter === 'all' || 
                          invoice.status === this.currentFilter;
      const matchesSearch = invoice.no.toLowerCase().includes(this.searchTerm) ||
                          invoice.status.toLowerCase().includes(this.searchTerm);
      return matchesStatus && matchesSearch;
    });
  }

  filterInvoices(status: string): void {
    this.currentFilter = status;
    this.applyFilters();
  }

  applyFilter(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.applyFilters();
  }

  getStatusCount(status: string): number {
    return this.invoices.filter(inv => 
      status === 'all' ? true : inv.status === status
    ).length;
  }

  getTotalValue(): number {
    return this.invoices.reduce((sum, inv) => sum + inv.value, 0);
  }

  getPendingAmount(): number {
    return this.invoices
      .filter(inv => inv.status !== 'Paid')
      .reduce((sum, inv) => sum + inv.balance, 0);
  }

  isOverdue(invoice: Invoice): boolean {
    const today = new Date();
    return invoice.dueDate < today && invoice.status !== 'Paid';
  }
  

}
