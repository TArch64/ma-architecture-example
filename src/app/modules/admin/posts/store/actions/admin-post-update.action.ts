import { IAdminPostJson } from '../../type';

export class AdminPostUpdateAction {
  public static readonly type = '[Admin][Posts] Update post details';

  public static create(updates: Partial<IAdminPostJson>): AdminPostUpdateAction {
    return new AdminPostUpdateAction(updates);
  }

  private constructor(public readonly updates: Partial<IAdminPostJson>) {}
}
