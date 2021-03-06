import { Routes } from '@angular/router';

export const appRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'posts',
    loadChildren: () => import('./modules/posts').then(m => m.PostsModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin').then(m => m.AdminModule)
  },
  {
    path: '**',
    redirectTo: 'posts'
  }
];
