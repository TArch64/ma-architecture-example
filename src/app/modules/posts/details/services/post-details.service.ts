import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { PostDetailsModel } from '../models';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrlService } from '../../../core';

interface IPostDetailsIllustrationJson {
  url: string;
}

interface IPostDetailsApiJson {
  title: string;
  content: string;
  illustration: IPostDetailsIllustrationJson | null;
}

@Injectable()
export class PostDetailsService {
  constructor(
    private readonly http: HttpClient,
    private readonly apiUrlService: ApiUrlService
  ) {}

  public fetchPost(postId: number): Observable<PostDetailsModel | null> {
    const url = this.apiUrlService.build(['posts', postId.toString()]);
    return this.http.get<IPostDetailsApiJson>(url).pipe(
      map(post => PostDetailsModel.fromJson({
        title: post.title,
        content: post.content,
        illustrationUrl: post.illustration?.url ?? null
      })),
      catchError((error): Observable<null | never> => {
        const status = (error as HttpErrorResponse).status;
        return status === 404 ? of(null) : EMPTY;
      })
    );
  }
}
