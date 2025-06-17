import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-form',
  imports: [],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.scss'
})
export class InvoiceFormComponent {


    currentDate = new Date().toISOString().split('T')[0]; // For default date values
}
