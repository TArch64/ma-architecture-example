import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
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
import { AdminPostsListResolver } from './resolvers';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdminPostsListItemTitlePipe } from './pipes';

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
    MatIconModule
  ],
  declarations: [
    AdminPostsViewComponent,
    AdminPostsListComponent,
    AdminPostsListEmptyComponent,
    AdminPostsListItemTitlePipe,
    AdminPostViewComponent
  ],
  providers: [
    AdminPostsService,
    AdminPostsListResolver
  ]
})
export class AdminPostsModule {}
