import { Routes } from '@angular/router';
import { AdminAuthOnlyGuard, AdminUnauthOnlyGuard } from './shared';

export const adminRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'auth',
    canActivate: [AdminUnauthOnlyGuard],
    loadChildren: () => import('./auth').then(m => m.AdminAuthModule)
  },
  {
    path: 'posts',
    canActivate: [AdminAuthOnlyGuard],
    loadChildren: () => import('./posts').then(m => m.AdminPostsModule)
  }
];
