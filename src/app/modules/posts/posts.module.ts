import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { postsRouting } from './posts.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postsRouting)
  ]
})
export class PostsModule {}
