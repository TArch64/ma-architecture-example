import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AdminPostsItemModel } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AdminPostsFetchListAction } from '../store';
import { LayoutLoadingService } from '../../../core';
import { tap } from 'rxjs/operators';

@Injectable()
export class AdminPostsListResolver  implements Resolve<AdminPostsItemModel[]>{
  constructor(
    private readonly store: Store,
    private readonly loadingService: LayoutLoadingService
  ) {}

  public resolve(): Observable<AdminPostsItemModel[]> {
    this.loadingService.show();
    return this.store.dispatch(AdminPostsFetchListAction.create()).pipe(
      tap(() => this.loadingService.hide())
    )
  }
}
