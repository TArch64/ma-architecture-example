import { Component, EventEmitter, Output } from '@angular/core';
import { AdminPostsItemModel } from '../../models';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { AdminPostsState } from '../../store';

@Component({
  selector: 'app-admin-posts-list',
  templateUrl: './admin-posts-list.component.html',
  styleUrls: ['./admin-posts-list.component.css']
})
export class AdminPostsListComponent {
  @Select(AdminPostsState.list)
  public readonly posts$: Observable<AdminPostsItemModel[]>;

  @Output()
  public readonly onAddPost = new EventEmitter<null>();

  public addPost(): void {
    this.onAddPost.emit(null);
  }
}
