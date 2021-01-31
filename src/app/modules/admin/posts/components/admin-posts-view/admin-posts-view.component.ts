import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { AdminPostsAddAction, AdminPostsState } from '../../store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-posts-view',
  templateUrl: './admin-posts-view.component.html',
  styleUrls: ['./admin-posts-view.component.css']
})
export class AdminPostsViewComponent {
  @Select(AdminPostsState.isListEmpty)
  public readonly isListEmpty: Observable<boolean>;

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  public addPost(): void {
    this.store.dispatch(AdminPostsAddAction.create()).subscribe(() => {
      const post = this.store.selectSnapshot(AdminPostsState.lastAddedItem);
      this.router.navigate(['/admin', 'posts', post.id]);
    });
  }
}
