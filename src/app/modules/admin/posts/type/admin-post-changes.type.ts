import { IAdminPostJson } from './index';

export type AdminPostChanges = Omit<Partial<IAdminPostJson>, 'id'>;
