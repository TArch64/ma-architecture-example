import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable, of } from 'rxjs';
import { AdminPostModel, AdminPostsItemModel } from '../models';
import { IAdminPostJson, IAdminPostsItemJson } from '../type';
import { ApiUrlService } from '../../../core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AdminPostsService {
  constructor(
    private readonly http: HttpClient,
    private readonly apiUrlService: ApiUrlService
  ) {}

  public fetchList(): Observable<AdminPostsItemModel[]> {
    const url = this.apiUrlService.build(['posts']);
    const params = {
      _sort: 'id',
      _order: 'desc'
    };
    return this.http.get<IAdminPostsItemJson[]>(url, { params }).pipe(
      map(posts => posts.map(AdminPostsItemModel.fromJson))
    );
  }

  public addPost(): Observable<AdminPostsItemModel> {
    const url = this.apiUrlService.build(['posts']);
    const payload = {
      title: '',
      isPublished: false,
      illustration: null
    };
    return this.http.post<IAdminPostsItemJson>(url, payload).pipe(
      map(AdminPostsItemModel.fromJson)
    );
  }

  public fetchPost(postId: number): Observable<AdminPostModel | null> {
    const url = this.apiUrlService.build(['posts', postId.toString()]);
    return this.http.get<IAdminPostJson>(url).pipe(
      map(AdminPostModel.fromJson),
      catchError((error): Observable<null | never> => {
        const status = (error as HttpErrorResponse).status
        return status === 404 ? of(null) : EMPTY;
      })
    );
  }

  public updatePost(post: AdminPostModel): Observable<AdminPostModel> {
    const url = this.apiUrlService.build(['posts', post.id.toString()]);
    return this.http.put<IAdminPostJson>(url, post.toJson()).pipe(
      map(AdminPostModel.fromJson)
    );
  }
}
