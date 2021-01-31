export class AdminPostFetchAction {
  public static readonly type = '[Admin][Post] fetch post details';

  public static create(postId: number): AdminPostFetchAction {
    return new AdminPostFetchAction(postId);
  }

  private constructor(
    public readonly postId: number
  ) {}
}
