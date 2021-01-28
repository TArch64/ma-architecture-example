import { ElementRef, Injectable } from '@angular/core';
import { asyncScheduler, fromEvent, Observable, Subject } from 'rxjs';
import { LayoutScrollEvent } from '../models';
import { map, throttleTime } from 'rxjs/operators';
import { AutoUnsubscribe } from '../../shared';

@Injectable()
export class LayoutScrollService extends AutoUnsubscribe {
  public readonly onScrollSubject: Subject<LayoutScrollEvent> = new Subject<LayoutScrollEvent>();

  public registerScrollingRoot(ref: ElementRef<HTMLElement>): void {
    fromEvent(ref.nativeElement, 'scroll').pipe(
      this.takeUntilDestroyed,
      throttleTime(100, asyncScheduler, { leading: true, trailing: true }),
      map(LayoutScrollEvent.fromNativeScrollEvent)
    ).subscribe(event => this.onScrollSubject.next(event));
  }

  public get onScroll$(): Observable<LayoutScrollEvent> {
    return this.onScrollSubject.asObservable();
  }
}
