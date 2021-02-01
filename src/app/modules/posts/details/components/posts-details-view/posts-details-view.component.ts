import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDetailsModel } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts-details-view',
  templateUrl: './posts-details-view.component.html',
  styleUrls: ['./posts-details-view.component.css']
})
export class PostsDetailsViewComponent {
  public readonly post$: Observable<PostDetailsModel> = this.createPostStream();

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  private createPostStream(): Observable<PostDetailsModel> {
    return this.activatedRoute.data.pipe(
      map(data => data.post)
    );
  }
}
