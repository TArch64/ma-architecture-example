import { Routes } from '@angular/router';
import { PostsListViewComponent } from './components';
import { PostsListResolver } from './resolvers';

export const postsListRouting: Routes = [
  {
    path: '',
    resolve: { posts: PostsListResolver },
    component: PostsListViewComponent
  }
];

