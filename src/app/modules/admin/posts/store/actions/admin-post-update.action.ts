import { AdminPostChanges } from '../../type';

export class AdminPostUpdateAction {
  public static readonly type = '[Admin][Posts] Update post details';

  public static create(updates: AdminPostChanges): AdminPostUpdateAction {
    return new AdminPostUpdateAction(updates);
  }

  private constructor(public readonly updates: AdminPostChanges) {}
}
