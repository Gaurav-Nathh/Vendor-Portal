import { Component, OnInit } from '@angular/core';
import { MappingPageService } from '../../core/services/mapping-page.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mapping-form',
  templateUrl: './mapping-form.component.html',
  styleUrls: ['./mapping-form.component.scss'],
  imports: [FormsModule], // Import any necessary modules here
})
export class MappingFormComponent implements OnInit {
  FormData: any; // Declare the property without initializing it

  constructor(private mappingFormsService: MappingPageService) {}

  ngOnInit(): void {
    // Initialize mappingFormData after the service is ready
    this.FormData = this.mappingFormsService.MappingData;
  }

  saveForm(): void {
    console.log('Save button clicked', this.FormData);
    // Add logic to save the entered data
  }

  removeItem(): void {
    console.log('Remove button clicked');
    // Add logic to remove the entered data
  }

  closeItem(): void {
    this.mappingFormsService.closeForm();
  }
}
