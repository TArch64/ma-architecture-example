import { Component, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AdminPostsState, AdminPostUpdateAction } from '../../store';
import { Observable } from 'rxjs';
import { AdminPostModel } from '../../models';
import { AdminPostEditorComponent } from '../admin-post-editor/admin-post-editor.component';
import { AlertsService, AutoUnsubscribe } from '../../../../core';
import { AdminPostChanges } from '../../type';
import { AdminPostUpdateSchedulerService } from '../../services';

@Component({
  selector: 'app-admin-post-view',
  templateUrl: './admin-post-view.component.html',
  styleUrls: ['./admin-post-view.component.css'],
  providers: [AdminPostUpdateSchedulerService]
})
export class AdminPostViewComponent extends AutoUnsubscribe {
  @Select(AdminPostsState.selectedPost)
  public readonly post$: Observable<AdminPostModel>;

  @ViewChild('editor')
  private readonly postEditor: AdminPostEditorComponent;

  constructor(
    private readonly store: Store,
    private readonly alertsService: AlertsService,
    private readonly updateScheduler: AdminPostUpdateSchedulerService
  ) {
    super();
    this.updateScheduler.update$.pipe(this.takeUntilDestroyed).subscribe(this.processUpdate.bind(this));
  }

  public togglePublished(toPublish: boolean): void {
    this.update({ isPublished: toPublish });
  }

  public update(updates: AdminPostChanges): void {
    this.updateScheduler.scheduleUpdate(updates);
  }

  private onEditorValidationError(): void {
    this.alertsService.show('There are some issues with your post. Please check all entered data');
  }

  private processUpdate(updates: AdminPostChanges) {
    const isEditorValid = this.postEditor.validate();
    if (!isEditorValid) return this.onEditorValidationError();

    const publishAction = AdminPostUpdateAction.create(updates);
    this.store.dispatch(publishAction).subscribe();
  }
}
