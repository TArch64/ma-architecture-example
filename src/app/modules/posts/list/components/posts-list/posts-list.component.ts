import { Component, Input } from '@angular/core';
import { PostsListItemModel } from '../../models';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  @Input()
  public posts: PostsListItemModel[];
}
