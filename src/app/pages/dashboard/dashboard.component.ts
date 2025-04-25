import { Component } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private sharedService: SharedService) {}

  toggleCartPanel() {
    this.sharedService.toggleCart();
  }
}
