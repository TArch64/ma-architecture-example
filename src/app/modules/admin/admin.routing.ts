import { Routes } from '@angular/router';

export const adminRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'posts',
    loadChildren: () => import('./modules/posts').then(m => m.AdminPostsModule)
  }
];
