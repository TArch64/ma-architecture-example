export class AdminPostPublishAction {
  public static readonly type = '[Admin][Posts] Toggle published status';

  public static create(toPublish: boolean): AdminPostPublishAction {
    return new AdminPostPublishAction(toPublish);
  }

  private constructor(public readonly toPublish: boolean) {}
}
