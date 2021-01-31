import { IAdminPostJson } from './index';
import { AdminPostIllustrationModel } from '../models';

export type AdminPostChanges = Omit<Partial<IAdminPostJson & { illustration: AdminPostIllustrationModel }>, 'id'> & Object;
