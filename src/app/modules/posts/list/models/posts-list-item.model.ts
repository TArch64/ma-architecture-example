import { IPostsListItemJson } from '../types';

export class PostsListItemModel {
  public static fromJson(json: IPostsListItemJson): PostsListItemModel {
    return new PostsListItemModel(json.id, json.title, json.illustrationUrl);
  }

  private constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly illustrationUrl: string
  ) {}
}
