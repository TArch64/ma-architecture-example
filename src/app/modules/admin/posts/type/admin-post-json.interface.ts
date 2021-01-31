import { IAdminPostIllustrationJson } from './admin-post-illustration-json.interface';

export interface IAdminPostJson {
  id: number;
  title: string;
  isPublished: boolean;
  illustration: IAdminPostIllustrationJson | null;
}
