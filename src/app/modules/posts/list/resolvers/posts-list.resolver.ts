import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PostsListItemModel } from '../models';
import { Observable } from 'rxjs';
import { PostsListService } from '../services';

@Injectable()
export class PostsListResolver implements Resolve<PostsListItemModel[]> {
  constructor(private readonly postsService: PostsListService) {}

  public resolve(): Observable<PostsListItemModel[]> {
    return this.postsService.fetchList();
  }
}
