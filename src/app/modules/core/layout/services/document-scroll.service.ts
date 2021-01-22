import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { asyncScheduler, Observable } from 'rxjs';
import { DocumentScrollEvent } from '../models';
import { DOCUMENT } from '@angular/common';
import { map, throttleTime } from 'rxjs/operators';

@Injectable()
export class DocumentScrollService {
  private readonly renderer: Renderer2;
  public readonly onScroll$: Observable<DocumentScrollEvent> = this.createOnScrollStream();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private createOnScrollStream(): Observable<DocumentScrollEvent> {
    return new Observable<Event>(subscriber => {
      this.renderer.listen(this.document, 'scroll', event => subscriber.next(event));
    }).pipe(
      throttleTime(100, asyncScheduler, { leading: true, trailing: true }),
      map(DocumentScrollEvent.fromNativeScrollEvent)
    )
  }
}
