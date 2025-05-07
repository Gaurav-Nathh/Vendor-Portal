
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



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

}
