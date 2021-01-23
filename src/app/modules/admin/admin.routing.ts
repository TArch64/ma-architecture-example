import { Routes } from '@angular/router';
import { AdminAuthOnlyGuard } from './shared';

export const adminRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth').then(m => m.AdminAuthModule)
  },
  {
    path: 'posts',
    canActivate: [AdminAuthOnlyGuard],
    loadChildren: () => import('./posts').then(m => m.AdminPostsModule)
  }
];
