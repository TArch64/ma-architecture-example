import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsListItemModel } from '../../models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts-list-view',
  templateUrl: './posts-list-view.component.html',
  styleUrls: ['./posts-list-view.component.css']
})
export class PostsListViewComponent {
  public readonly posts$: Observable<PostsListItemModel[]> = this.createPostsStream();

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  private createPostsStream(): Observable<PostsListItemModel[]> {
    return this.activatedRoute.data.pipe(map(data => data.posts));
  }
}
