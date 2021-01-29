import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminPostsItemModel } from '../models';
import { IAdminPostsItemJson } from '../type';
import { ApiUrlService } from '../../../core';
import { map } from 'rxjs/operators';

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
      map(posts => posts.map(AdminPostsItemModel.fromApiData))
    );
  }

  public addPost(): Observable<AdminPostsItemModel> {
    const url = this.apiUrlService.build(['posts']);
    const payload = { title: '' };
    return this.http.post<IAdminPostsItemJson>(url, payload).pipe(
      map(AdminPostsItemModel.fromApiData)
    );
  }
}
