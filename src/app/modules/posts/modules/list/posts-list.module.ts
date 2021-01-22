import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreLayoutModule } from '../../../core/layout';
import { postsListRouting } from './posts-list.routing';
import { PostsListViewComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postsListRouting),
    CoreLayoutModule
  ],
  declarations: [
    PostsListViewComponent
  ]
})
export class PostsListModule {}
