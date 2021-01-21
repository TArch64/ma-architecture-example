import { Routes } from '@angular/router';

export const appRouting: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./modules/posts').then(m => m.PostsModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/posts'
  }
]
