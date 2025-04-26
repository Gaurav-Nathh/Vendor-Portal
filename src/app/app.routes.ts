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
          import(
            './components/create-vendor-form/create-vendor-form.component'
          ).then((c) => c.CreateVendorFormComponent),
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
      {
        path: 'create-vendor',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './components/create-vendor-form/create-vendor-form.component'
          ).then((c) => c.CreateVendorFormComponent),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'customer',
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
        path: 'shopping-cart',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/shopping-cart/shopping-cart.component').then(
            (c) => c.ShoppingCartComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'purchase-order',
        pathMatch: 'full',
        loadComponent: () =>
          import('./components/purchase-form/purchase-form.component').then(
            (c) => c.PurchaseFormComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'purchase-dashboard',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './pages/purchase-dashboard/purchase-dashboard.component'
          ).then((c) => c.PurchaseDashboardComponent),
        canActivate: [authGuard],
      },
      {
        path: 'vendors',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './components/create-vendor-form/create-vendor-form.component'
          ).then((c) => c.CreateVendorFormComponent),
        canActivate: [authGuard],
      },
      {
        path: 'vendor-dashboard',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/vendor-dashboard/vendor-dashboard.component').then(
            (c) => c.VendorDashboardComponent
          ),
      },
    ],
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
