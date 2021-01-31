import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminPostModel } from '../../models';

@Component({
  selector: 'app-admin-post-header',
  templateUrl: './admin-post-header.component.html',
  styleUrls: ['./admin-post-header.component.css']
})
export class AdminPostHeaderComponent {
  @Input()
  public post: AdminPostModel;

  @Output()
  public readonly onTogglePublished = new EventEmitter<boolean>();

  public togglePublished(toPublish: boolean) {
    this.onTogglePublished.emit(toPublish);
  }
}
