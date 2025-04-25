import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-vendor-form',
  imports: [],
  templateUrl: './create-vendor-form.component.html',
  styleUrl: './create-vendor-form.component.scss'
})
export class CreateVendorFormComponent {

  vendorForm: FormGroup;
  uploadedFiles: File[] = [];

  constructor(private fb: FormBuilder) {
    this.vendorForm = this.fb.group({
      vendorNumber: ['VEN-00002'],
      salutation: ['Mr.'],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required],
      displayName: [''],
      email: ['', [Validators.required, Validators.email]],
      workPhone: [''],
      mobile: ['', Validators.required],
      pan: ['', [Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      msmeRegistered: [false],
      currency: ['INR'],
      openingBalance: [0],
      paymentTerms: [''],
      enablePortal: [false],
      portalLanguage: ['en']
    });
  }

  ngOnInit(): void {
    this.vendorForm.get('enablePortal')?.valueChanges.subscribe(value => {
      const portalLanguageControl = this.vendorForm.get('portalLanguage');
      if (value) {
        portalLanguageControl?.enable();
      } else {
        portalLanguageControl?.disable();
      }
    });
  }

  onSubmit(): void {
    if (this.vendorForm.valid) {
      const formData = new FormData();
      
      // Append form values
      Object.keys(this.vendorForm.value).forEach(key => {
        const value = this.vendorForm.value[key];
        if (value !== null && value !== undefined) {
          formData.append(key, value);
        }
      });
      
      // Append files
      this.uploadedFiles.forEach(file => {
        formData.append('documents', file, file.name);
      });
      
      // Here you would typically send formData to your API
      console.log('Form submitted:', formData);
    }
  }

  onCancel(): void {
    // Handle cancel action
    console.log('Form cancelled');
    this.vendorForm.reset();
    this.uploadedFiles = [];
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    
    if (files && files.length > 0) {
      // Check total files count
      if (this.uploadedFiles.length + files.length > 10) {
        alert('You can upload a maximum of 10 files');
        return;
      }
      
      // Check each file size (10MB max)
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 10 * 1024 * 1024) {
          alert(`File ${files[i].name} exceeds 10MB limit`);
          continue;
        }
        this.uploadedFiles.push(files[i]);
      }
    }
  }

  removeFile(file: File): void {
    this.uploadedFiles = this.uploadedFiles.filter(f => f !== file);
  }

}
