import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-posts-list-empty',
  templateUrl: './admin-posts-list-empty.component.html',
  styleUrls: ['./admin-posts-list-empty.component.css']
})
export class AdminPostsListEmptyComponent {
  @Output()
  public readonly onAddPost = new EventEmitter<null>();

  public addPost(): void {
    this.onAddPost.emit(null);
  }
}
