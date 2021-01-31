import { AdminPostsItemChanges, IAdminPostsItemJson } from '../type';

export class AdminPostsItemModel {
  public static fromJson(json: IAdminPostsItemJson): AdminPostsItemModel {
    return new AdminPostsItemModel(json.id, json.title);
  }

  private constructor(
    public readonly id: number,
    public readonly title: string
  ) {}

  public update(changes: AdminPostsItemChanges): AdminPostsItemModel {
    return new AdminPostsItemModel(this.id, changes.title ?? this.title);
  }
}
