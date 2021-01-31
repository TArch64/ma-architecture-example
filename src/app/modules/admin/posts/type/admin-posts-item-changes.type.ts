import { IAdminPostsItemJson } from './index';

export type AdminPostsItemChanges = Omit<Partial<IAdminPostsItemJson>, 'id'> & Object;
