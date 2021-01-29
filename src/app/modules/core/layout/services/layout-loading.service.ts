import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LayoutLoadingService {
  private readonly stateSubject = new BehaviorSubject<number>(0);
  public readonly isVisible$: Observable<boolean> = this.createVisibilitySteam();

  public show(): void {
    const count = this.stateSubject.getValue();
    this.stateSubject.next(count + 1);
  }

  public hide(): void {
    const count = this.stateSubject.getValue();
    this.stateSubject.next(Math.max(count - 1, 0));
  }

  private createVisibilitySteam(): Observable<boolean> {
    return this.stateSubject.asObservable().pipe(
      debounceTime(250),
      map(count => count > 0),
      distinctUntilChanged()
    );
  }
}
