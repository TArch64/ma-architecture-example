import { AdminPostChanges, IAdminPostJson } from '../type';
import { AdminPostIllustrationModel } from './admin-post-illustration.model';

export class AdminPostModel {
  public static fromJson(json: IAdminPostJson): AdminPostModel {
    return new AdminPostModel(
      json.id,
      json.title,
      json.isPublished,
      json.illustration ? AdminPostIllustrationModel.fromJson(json.illustration) : null
    );
  }

  private constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly isPublished: boolean,
    public readonly illustration: AdminPostIllustrationModel | null
  ) {}

  public update(updates: AdminPostChanges): AdminPostModel {
    return new AdminPostModel(
      this.id,
      updates.title ?? this.title,
      updates.isPublished ?? this.isPublished,
      updates.hasOwnProperty('illustration') ? updates.illustration : this.illustration
    );
  }

  public toJson(): IAdminPostJson {
    return {
      id: this.id,
      title: this.title,
      isPublished: this.isPublished,
      illustration: this.illustration?.toJson() ?? null
    };
  }
}
