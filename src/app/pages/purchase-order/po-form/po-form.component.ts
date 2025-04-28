import { Component } from '@angular/core';
import { PurchaseFormComponent } from '../../../components/purchase-form/purchase-form.component';
import { ShoppingCartComponent } from '../../shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-po-form',
  imports: [PurchaseFormComponent, ShoppingCartComponent],
  templateUrl: './po-form.component.html',
  styleUrl: './po-form.component.scss',
})
export class PoFormComponent {
  isShopingCartOpen = false;
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.shoppingCartVisible$.subscribe((visible) => {
      this.isShopingCartOpen = visible;
    });
  }
  toggleShoppingCart() {
    this.sharedService.toggleShoppingCartVisibility();
  }
}
