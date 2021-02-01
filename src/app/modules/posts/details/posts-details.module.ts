import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { postsDetailsRouting } from './posts-details.routing';
import { CoreLayoutModule, CoreSharedModule } from '../../core';
import { PostsDetailsViewComponent } from './components';
import { PostTextContentPipe } from './pipes';
import { PostDetailsResolver } from './resolvers';
import { PostDetailsService } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postsDetailsRouting),
    HttpClientModule,
    CoreLayoutModule,
    CoreSharedModule
  ],
  declarations: [
    PostsDetailsViewComponent,
    PostTextContentPipe
  ],
  providers: [
    PostDetailsService,
    PostDetailsResolver
  ]
})
export class PostsDetailsModule {}
