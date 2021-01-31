import { Component, Input } from '@angular/core';
import { PostsListItemModel } from '../../models';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.css']
})
export class PostsListItemComponent {
  @Input()
  public post: PostsListItemModel;

  public get illustrationUrl(): string {
    return this.post.illustrationUrl ?? '/assets/images/post-placeholder.jpg';
  }
}
