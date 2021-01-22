import { Routes } from '@angular/router';

export const postsRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./list').then(m => m.PostsListModule)
  },
  {
    path: ':postId',
    loadChildren: () => import('./details').then(m => m.PostsDetailsModule)
  }
]
