import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDashboardComponent } from './purchase-dashboard.component';

describe('PurchaseDashboardComponent', () => {
  let component: PurchaseDashboardComponent;
  let fixture: ComponentFixture<PurchaseDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
