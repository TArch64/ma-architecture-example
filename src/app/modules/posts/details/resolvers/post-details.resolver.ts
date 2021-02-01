import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { PostDetailsModel } from '../models';
import { Observable } from 'rxjs';
import { PostDetailsService } from '../services';
import { tap } from 'rxjs/operators';

@Injectable()
export class PostDetailsResolver implements Resolve<PostDetailsModel> {
  constructor(
    private readonly router: Router,
    private readonly postService: PostDetailsService
  ) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<PostDetailsModel | null> {
    const postId: number = Number(route.paramMap.get('postId'));
    return this.postService.fetchPost(postId).pipe(
      tap(post => {
        if (!post) this.router.navigate(['/posts']);
      })
    );
  }
}
