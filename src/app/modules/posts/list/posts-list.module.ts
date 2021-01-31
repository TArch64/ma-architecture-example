import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreLayoutModule, CoreSharedModule } from '../../core';
import { postsListRouting } from './posts-list.routing';
import { PostsListComponent, PostsListItemComponent, PostsListViewComponent } from './components';
import { HttpClientModule } from '@angular/common/http';
import { PostsListService } from './services';
import { PostsListResolver } from './resolvers';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postsListRouting),
    HttpClientModule,
    CoreLayoutModule,
    CoreSharedModule,
    MatCardModule
  ],
  declarations: [
    PostsListViewComponent,
    PostsListComponent,
    PostsListItemComponent
  ],
  providers: [
    PostsListService,
    PostsListResolver
  ]
})
export class PostsListModule {}
