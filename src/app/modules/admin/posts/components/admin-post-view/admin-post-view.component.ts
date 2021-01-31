import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AdminPostPublishAction, AdminPostsState } from '../../store';
import { Observable } from 'rxjs';
import { AdminPostModel } from '../../models';

@Component({
  selector: 'app-admin-post-view',
  templateUrl: './admin-post-view.component.html',
  styleUrls: ['./admin-post-view.component.css']
})
export class AdminPostViewComponent {
  @Select(AdminPostsState.selectedPost)
  public readonly post$: Observable<AdminPostModel>;

  constructor(private readonly store: Store) {}

  public togglePublished(toPublish: boolean): void {
    const publishAction = AdminPostPublishAction.create(toPublish);
    this.store.dispatch(publishAction).subscribe();
  }
}
