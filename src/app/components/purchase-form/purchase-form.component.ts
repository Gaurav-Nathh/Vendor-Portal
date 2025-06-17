import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PoServiceFileService } from '../../services/po-service/po-service-file.service';

interface AttachedFile {
  name: string;
  size: number;
  type: string;
}

@Component({
  selector: 'app-purchase-form',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './purchase-form.component.html',
  styleUrl: './purchase-form.component.scss'
})
export class PurchaseFormComponent {
  form = {
    vendorName: '',
    orgType: '',
    deliveryAddress: '',
    poNumber: '',
    referenceNumber: '',
    date: '',
    deliveryDate: '',
    paymentTerms: '',
    shipmentPreference: '',
    customerNotes: '',
    terms: '',
    discount: 0
  };

  items = [
    { itemName: '', account: '', quantity: 0, rate: 0, amount: 0 }
  ];


 constructor(private poSerive:PoServiceFileService){

 }


  addItem(): void {
    this.items.push({ itemName: '', account: '', quantity: 0, rate: 0, amount: 0 });
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  updateAmount(item: any): void {
    const qty = +item.quantity || 0;
    const rate = +item.rate || 0;
    item.amount = qty * rate;
  }

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted', this.form, this.items);
    } else {
      console.log('Form is invalid');
    }
  }

  attachedFiles: AttachedFile[] = [];

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        // Check if already at max files (10)
        if (this.attachedFiles.length >= 10) {
          alert('Maximum 10 files allowed');
          break;
        }

        // Check file size (10MB max)
        if (file.size > 10 * 1024 * 1024) {
          alert(`File ${file.name} exceeds the 10MB size limit`);
          continue;
        }

        this.attachedFiles.push({
          name: file.name,
          size: file.size,
          type: file.type
        });
      }
    }
  }

  removeFile(index: number) {
    this.attachedFiles.splice(index, 1);
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  PoaddForm(){
    console.log(this.poSerive.poForm);
   this.poSerive.postPoForm(this.poSerive.poForm).subscribe({
    next:(res:any)=>{
      console.log(res,"data")
    }
   })
  }

  getItemclick(){
    console.log("hii")
  }
}
