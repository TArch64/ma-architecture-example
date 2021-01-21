import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentScrollEvent } from '../models';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class DocumentScrollService {
  private readonly renderer: Renderer2;
  public readonly onScroll$: Observable<DocumentScrollEvent> = this.createScrollStream();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private createScrollStream(): Observable<DocumentScrollEvent> {
    return new Observable<DocumentScrollEvent>(subscriber => {
      this.renderer.listen(this.document, 'scroll', event => {
        subscriber.next(DocumentScrollEvent.fromNativeScrollEvent(event));
      });
    })
  }
}
