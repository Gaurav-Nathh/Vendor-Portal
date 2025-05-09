
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Vendor } from '../../Models/interface/Vendor.interface';
import { VendorFormData } from '../../Models/data-structure/vendor.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { VendorServiceFileService } from '../../services/vendor-service/vendor-service-file.service';



@Component({
  selector: 'app-create-vendor-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-vendor-form.component.html',
  styleUrl: './create-vendor-form.component.scss',
})
export class CreateVendorFormComponent {

  vendors: string[] = ['grp1 A', 'grp2 B', 'grp3 C', 'grp4 X', 'grp5 Y'];
  filteredVendors: string[] = [...this.vendors];
  searchTerm: string = '';
  showDropdown: boolean = false;
  private closeTimeout: any;
 
  formstatus:boolean=false;
  


  constructor(private router: Router,public VendorService:VendorServiceFileService) {}
  
  filterVendors() {
    const term = this.searchTerm.toLowerCase();
    this.filteredVendors = this.vendors.filter(vendor =>
      vendor.toLowerCase().includes(term)
    );
  }
  
  onFocus() {
    this.showDropdown = true;
    this.filterVendors();
    this.cancelCloseTimeout();
  }
  
  selectVendor(vendor: string) {
    this.searchTerm = vendor;
    this.showDropdown = false;
    this.cancelCloseTimeout();
  }
  
  onFocusOut(event: FocusEvent) {
    this.closeTimeout = setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }
  
  private cancelCloseTimeout() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
  }

  isToggled: boolean = false;

toggleState() {
  this.isToggled = !this.isToggled;
}

 

onSubmit(vendorForm: NgForm) {
  if (!vendorForm.valid) {
    // Find first invalid input
    const firstInvalidControl: HTMLElement | null = document.querySelector(
      'form .ng-invalid[required]'
    );

    if (firstInvalidControl) {
      firstInvalidControl.focus(); 
    }

    // Show Swal error
    Swal.fire({
      toast: true,
      icon: 'error',
      position: 'top-end',
      title: 'Please fill all required fields',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: 'swal-toast',
        icon: 'no-border',
        title: 'swal-title',
      },
    });

    return;
  }

  // Confirmation popup
  Swal.fire({
    title: 'Are you sure?',
    text: 'Please confirm to submit the form.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Submit Form',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(this.VendorService.vendor);

      Swal.fire({
        icon: 'success',
        title: 'Form Submitted!',
        text: 'Vendor details have been successfully submitted.',
        timer: 2000,
        showConfirmButton: false
      });

      this.VendorService.vendor = new VendorFormData();
      this.searchTerm = '';
      this.formstatus=true;
    }
  });
}

  
  
  onCancel(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'Please confirm to cancel the form.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it',
      cancelButtonText: 'No, keep editing'

    }).then((result)=>{
      if(result.isConfirmed){
         this.VendorService.vendor = new VendorFormData();
         this.router.navigate(['/master/users/vendors']);
      }
    })
   
  }




}


