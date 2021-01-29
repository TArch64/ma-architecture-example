import { Pipe, PipeTransform } from '@angular/core';
import { AdminPostsItemModel } from '../models';

@Pipe({
  name: 'adminPostsListItemTitle'
})
export class AdminPostsListItemTitlePipe implements PipeTransform {
  public transform(post: AdminPostsItemModel): string {
    return post.title || this.generateTemporaryTitle(post);
  }

  private generateTemporaryTitle(post: AdminPostsItemModel): string {
    return `Unnamed post #${post.id}`;
  }
}
