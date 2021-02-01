import { IPostDetailsJson } from '../types';

export class PostDetailsModel {
  public readonly hasIllustration: boolean;

  public static fromJson(json: IPostDetailsJson): PostDetailsModel {
    return new PostDetailsModel(json.title, json.illustrationUrl, json.content);
  }

  private constructor(
    public readonly title: string,
    public readonly illustrationUrl: string,
    public readonly content: string
  ) {
    this.hasIllustration = !!this.illustrationUrl;
  }
}
