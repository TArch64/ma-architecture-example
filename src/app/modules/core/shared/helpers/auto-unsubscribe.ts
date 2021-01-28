import { Injectable, OnDestroy } from '@angular/core';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class AutoUnsubscribe implements OnDestroy {
  private readonly takeUntilDestroyedSubject: Subject<null> = new Subject<null>();

  public ngOnDestroy() {
    this.takeUntilDestroyedSubject.next(null);
    this.takeUntilDestroyedSubject.complete();
  }

  public get takeUntilDestroyed(): MonoTypeOperatorFunction<unknown> {
    return takeUntil(this.takeUntilDestroyedSubject);
  }
}
