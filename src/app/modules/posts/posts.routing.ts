import { Routes } from '@angular/router';

export const postsRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/list').then(m => m.PostsListModule)
  },
  {
    path: ':postId',
    loadChildren: () => import('./modules/details').then(m => m.PostsDetailsModule)
  }
]
