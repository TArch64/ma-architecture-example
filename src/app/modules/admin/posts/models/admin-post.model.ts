import { AdminPostChanges, IAdminPostJson } from '../type';

export class AdminPostModel {
  public static fromJson(json: IAdminPostJson): AdminPostModel {
    return new AdminPostModel(json.id, json.title, json.isPublished);
  }

  private constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly isPublished: boolean
  ) {}

  public update(updates: AdminPostChanges): AdminPostModel {
    return new AdminPostModel(
      this.id,
      updates.title ?? this.title,
      updates.isPublished ?? this.isPublished
    );
  }

  public toJson(): IAdminPostJson {
    return {
      id: this.id,
      title: this.title,
      isPublished: this.isPublished
    };
  }
}
