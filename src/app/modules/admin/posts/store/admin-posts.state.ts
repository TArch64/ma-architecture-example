import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IAdminPostsState } from '../type';
import {
  AdminPostFetchAction,
  AdminPostsAddAction,
  AdminPostsFetchListAction,
  AdminPostUpdateAction
} from './actions';
import { Observable } from 'rxjs';
import { AdminPostsService } from '../services';
import { AdminPostModel, AdminPostsItemModel } from '../models';
import { tap } from 'rxjs/operators';

@State<IAdminPostsState>({
  name: 'adminPosts',
  defaults: {
    list: [],
    lastAddedItem: null,
    selectedPost: null
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
  @Selector()
  public static selectedPost(state: IAdminPostsState): AdminPostModel | null {
    return state.selectedPost;
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

  @Action(AdminPostFetchAction)
  public fetchPost(context: StateContext<IAdminPostsState>, action: AdminPostFetchAction): Observable<AdminPostModel | null> {
    return this.postsService.fetchPost(action.postId).pipe(
      tap(post => context.patchState({ selectedPost: post }))
    );
  }

  @Action(AdminPostUpdateAction)
  public updatePost(context: StateContext<IAdminPostsState>, action: AdminPostUpdateAction): Observable<AdminPostModel> {
    const post = context.getState().selectedPost.update(action.updates);
    return this.postsService.updatePost(post).pipe(
      tap(updatedPost => this.onPostUpdated(context, updatedPost))
    );
  }

  private onPostUpdated(actionContext: StateContext<IAdminPostsState>, post: AdminPostModel): void {
    const posts = actionContext.getState().list.slice();
    const postIndex = posts.findIndex(item => item.id === post.id);
    const postsItem = posts[postIndex].update({ title: post.title });
    posts.splice(postIndex, 1, postsItem);

    actionContext.patchState({ selectedPost: post, list: posts });
  }
}
