import { Routes } from '@angular/router';
import { AdminPostsViewComponent, AdminPostViewComponent } from './components';
import { AdminPostsListResolver } from './resolvers';

export const adminPostsRouting: Routes = [
  {
    path: '',
    component: AdminPostsViewComponent,
    resolve: { posts: AdminPostsListResolver },
    children: [
      {
        path: ':postId',
        component: AdminPostViewComponent
      }
    ]
  }
];
