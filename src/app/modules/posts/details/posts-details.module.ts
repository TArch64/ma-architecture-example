import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { postsDetailsRouting } from './posts-details.routing';
import { CoreLayoutModule } from '../../core/layout';
import { PostsDetailsViewComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postsDetailsRouting),
    CoreLayoutModule
  ],
  declarations: [
    PostsDetailsViewComponent
  ]
})
export class PostsDetailsModule {}
