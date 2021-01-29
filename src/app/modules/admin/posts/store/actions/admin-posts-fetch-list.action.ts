export class AdminPostsFetchListAction {
  public static readonly type = '[Admin][Posts] fetch list';

  public static create(): AdminPostsFetchListAction {
    return new AdminPostsFetchListAction();
  }

  private constructor() {}
}
