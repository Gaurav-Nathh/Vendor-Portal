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
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'vendor',
    loadComponent: () =>
      import('./pages/user/user.component').then((c) => c.UserComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'item-mapping',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/item-mapping/item-mapping.component').then(
            (c) => c.ItemMappingComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'purchase-order',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/purchase-order/purchase-order.component').then(
            (c) => c.PurchaseOrderComponent
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
      {
        path: 'update-password',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/update-password/update-password.component').then(
            (c) => c.UpdatePasswordComponent
          ),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'customer',
    loadComponent: () =>
      import('./pages/user/user.component').then((c) => c.UserComponent),
    canActivate: [authGuard],
  },
  {
    path: 'item-mapping',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/item-mapping/item-mapping.component').then(
        (c) => c.ItemMappingComponent
      ),
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '/login' },
];
