import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { AdminPostModel } from '../models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AdminPostFetchAction, AdminPostsState } from '../store';
import { tap } from 'rxjs/operators';

@Injectable()
export class AdminPostResolver implements Resolve<AdminPostModel | null> {
  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<AdminPostModel | null> {
    const postId = Number(route.paramMap.get('postId'));
    const fetchPost = AdminPostFetchAction.create(postId);
    return this.store.dispatch(fetchPost).pipe(
      tap(() => {
        const post = this.store.selectSnapshot(AdminPostsState.selectedPost);
        if (!post) this.router.navigate(['/admin'])
      })
    );
  }
}
