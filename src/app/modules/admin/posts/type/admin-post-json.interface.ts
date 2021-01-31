import { IAdminPostIllustrationJson } from './admin-post-illustration-json.interface';

export interface IAdminPostJson {
  id: number;
  title: string;
  content: string;
  isPublished: boolean;
  illustration: IAdminPostIllustrationJson | null;
}
