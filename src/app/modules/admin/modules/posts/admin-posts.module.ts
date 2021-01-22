import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreLayoutModule } from '../../../core/layout';
import { AdminPostsViewComponent } from './components';
import { adminPostsRouting } from './admin-posts.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminPostsRouting),
    CoreLayoutModule
  ],
  declarations: [
    AdminPostsViewComponent
  ]
})
export class AdminPostsModule {}
