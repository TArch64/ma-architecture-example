export class AdminPostsAddAction {
  public static readonly type = '[Admin][Posts] add to list new post';

  public static create(): AdminPostsAddAction {
    return new AdminPostsAddAction();
  }

  private constructor() {}
}
