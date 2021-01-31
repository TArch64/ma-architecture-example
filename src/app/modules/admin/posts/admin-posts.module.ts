import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  AdminPostHeaderComponent,
  AdminPostPublishComponent,
  AdminPostsListComponent,
  AdminPostsListEmptyComponent,
  AdminPostsViewComponent,
  AdminPostViewComponent
} from './components';
import { adminPostsRouting } from './admin-posts.routing';
import { AdminSharedModule } from '../shared';
import { AdminPostsService } from './services';
import { NgxsModule } from '@ngxs/store';
import { AdminPostsState } from './store';
import { HttpClientModule } from '@angular/common/http';
import { AdminPostsListResolver, AdminPostResolver } from './resolvers';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdminPostTitlePipe } from './pipes';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminPostsRouting),
    NgxsModule.forFeature([AdminPostsState]),
    HttpClientModule,
    AdminSharedModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    AdminPostsViewComponent,
    AdminPostsListComponent,
    AdminPostsListEmptyComponent,
    AdminPostTitlePipe,
    AdminPostViewComponent,
    AdminPostHeaderComponent,
    AdminPostPublishComponent
  ],
  providers: [
    AdminPostsService,
    AdminPostsListResolver,
    AdminPostResolver
  ]
})
export class AdminPostsModule {}
