import { AdminPostsItemModel } from '../models';

export interface IAdminPostsState {
  list: AdminPostsItemModel[];
  lastAddedItem: AdminPostsItemModel | null;
}
