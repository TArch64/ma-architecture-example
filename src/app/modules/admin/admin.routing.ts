import { Routes } from '@angular/router';

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
    loadChildren: () => import('./posts').then(m => m.AdminPostsModule)
  }
];
