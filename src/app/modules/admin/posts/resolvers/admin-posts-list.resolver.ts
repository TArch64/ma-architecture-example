import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AdminPostsItemModel } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AdminPostsFetchListAction } from '../store';

@Injectable()
export class AdminPostsListResolver  implements Resolve<AdminPostsItemModel[]>{
  constructor(
    private readonly store: Store
  ) {}

  public resolve(): Observable<AdminPostsItemModel[]> {
    return this.store.dispatch(AdminPostsFetchListAction.create());
  }
}
