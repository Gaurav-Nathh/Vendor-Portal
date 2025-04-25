import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVendorFormComponent } from './create-vendor-form.component';

describe('CreateVendorFormComponent', () => {
  let component: CreateVendorFormComponent;
  let fixture: ComponentFixture<CreateVendorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVendorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVendorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
