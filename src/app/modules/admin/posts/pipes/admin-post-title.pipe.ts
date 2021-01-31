import { Pipe, PipeTransform } from '@angular/core';
import { AdminPostsItemModel } from '../models';

interface IPostLike {
  id: number;
  title: string;
}

@Pipe({
  name: 'adminPostTitle'
})
export class AdminPostTitlePipe implements PipeTransform {
  public transform(post: IPostLike): string {
    return post.title || this.generateTemporaryTitle(post);
  }

  private generateTemporaryTitle(post: AdminPostsItemModel): string {
    return `Unnamed post #${post.id}`;
  }
}
