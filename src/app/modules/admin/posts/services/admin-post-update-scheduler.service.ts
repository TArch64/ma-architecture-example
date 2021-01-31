import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AdminPostChanges } from '../type';

@Injectable()
export class AdminPostUpdateSchedulerService {
  private readonly schedulerSubject = new Subject<AdminPostChanges>();
  public readonly update$ = this.createUpdateStream();

  private createUpdateStream(): Observable<AdminPostChanges> {
    return this.schedulerSubject.asObservable().pipe(
      debounceTime(1000)
    );
  }

  public scheduleUpdate(data: AdminPostChanges): void {
    this.schedulerSubject.next(data);
  }
}
