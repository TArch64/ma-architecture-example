import { Routes } from '@angular/router';
import { PostsDetailsViewComponent } from './components';
import { PostDetailsResolver } from './resolvers';

export const postsDetailsRouting: Routes = [
  {
    path: '',
    resolve: { post: PostDetailsResolver },
    component: PostsDetailsViewComponent
  }
];
