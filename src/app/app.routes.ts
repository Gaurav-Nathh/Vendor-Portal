import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'vendor',
    loadComponent: () =>
      import('./pages/vendor/vendor.component').then((c) => c.VendorComponent),
    canActivate: [authGuard],
  },
  {
    path: 'customer',
    loadComponent: () =>
      import('./pages/customer/customer.component').then(
        (c) => c.CustomerComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'shopping-cart',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/shopping-cart/shopping-cart.component').then(
        (c) => c.ShoppingCartComponent
      ),
    canActivate: [authGuard],
  },
];
