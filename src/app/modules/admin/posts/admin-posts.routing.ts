import { Routes } from '@angular/router';
import { AdminPostsViewComponent, AdminPostViewComponent } from './components';
import { AdminPostResolver, AdminPostsListResolver } from './resolvers';

export const adminPostsRouting: Routes = [
  {
    path: '',
    component: AdminPostsViewComponent,
    resolve: { posts: AdminPostsListResolver },
    children: [
      {
        path: ':postId',
        resolve: { post: AdminPostResolver },
        component: AdminPostViewComponent
      }
    ]
  }
];
