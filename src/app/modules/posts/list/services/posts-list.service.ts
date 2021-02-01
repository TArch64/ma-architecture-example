import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsListItemModel } from '../models';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../../../core';
import { map } from 'rxjs/operators';

interface IPostItemIllustrationApiJson {
  url: string;
}

interface IPostItemApiJson {
  id: number;
  title: string;
  illustration: IPostItemIllustrationApiJson | null;
}

@Injectable()
export class PostsListService {
  constructor(
    private readonly http: HttpClient,
    private readonly apiUrlService: ApiUrlService
  ) {}

  public fetchList(): Observable<PostsListItemModel[]> {
    const url = this.apiUrlService.build(['posts']);
    const params = {
      _sort: 'id',
      _order: 'desc',
      isPublished_ne: 'false'
    };
    return this.http.get<IPostItemApiJson[]>(url, { params }).pipe(
      map(posts => posts.map(this.createListItem))
    );
  }

  private createListItem(post: IPostItemApiJson): PostsListItemModel {
    return PostsListItemModel.fromJson({
      id: post.id,
      title: post.title,
      illustrationUrl: post.illustration?.url ?? null
    });
  }
}
