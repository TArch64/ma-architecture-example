import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPostsViewComponent } from './components';
import { adminPostsRouting } from './admin-posts.routing';
import { AdminSharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminPostsRouting),
    AdminSharedModule
  ],
  declarations: [
    AdminPostsViewComponent
  ]
})
export class AdminPostsModule {}
