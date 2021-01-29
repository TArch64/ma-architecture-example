import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IAdminPostsState } from '../type';
import { AdminPostsAddAction, AdminPostsFetchListAction } from './actions';
import { Observable } from 'rxjs';
import { AdminPostsService } from '../services';
import { AdminPostsItemModel } from '../models';
import { tap } from 'rxjs/operators';

@State<IAdminPostsState>({
  name: 'adminPosts',
  defaults: {
    list: [],
    lastAddedItem: null
  }
})
@Injectable()
export class AdminPostsState {
  constructor(private readonly postsService: AdminPostsService) {}

  @Selector()
  public static list(state: IAdminPostsState): AdminPostsItemModel[] {
    return state.list;
  }

  @Selector()
  public static isListEmpty(state: IAdminPostsState): boolean {
    return !state.list.length;
  }

  @Selector()
  public static lastAddedItem(state: IAdminPostsState): AdminPostsItemModel | null {
    return state.lastAddedItem;
  }

  @Action(AdminPostsFetchListAction)
  public fetchList(context: StateContext<IAdminPostsState>): Observable<AdminPostsItemModel[]> {
    return this.postsService.fetchList().pipe(
      tap(posts => context.patchState({ list: posts }))
    );
  }

  @Action(AdminPostsAddAction)
  public addPost(context: StateContext<IAdminPostsState>): Observable<AdminPostsItemModel> {
    return this.postsService.addPost().pipe(
      tap(post => {
        const posts = [post].concat(context.getState().list);
        context.patchState({ list: posts, lastAddedItem: post });
      })
    );
  }
}
