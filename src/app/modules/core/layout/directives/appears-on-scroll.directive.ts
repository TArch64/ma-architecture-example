import { Directive, ElementRef, Host, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { DocumentScrollService } from '../services';
import { distinctUntilKeyChanged, map, pairwise, throttleTime } from 'rxjs/operators';
import { asyncScheduler, Observable, Subscription } from 'rxjs';
import { DocumentScrollEvent } from '../models';

type PairedScrollEvents = [DocumentScrollEvent, DocumentScrollEvent];
interface IScrollActionData {
  isHostVisible: boolean;
}

@Directive({
  selector: '[appAppearsOnScrollDirective]'
})
export class AppearsOnScrollDirective implements OnInit, OnDestroy {
  private static UPDATE_INTERVAL: number = 100;
  private static ROOT_OFFSET: number = 20;
  private static COMMON_CLASS: string = 'app-appears-on-scroll';
  private static VISIBLE_CLASS: string = AppearsOnScrollDirective.COMMON_CLASS + '--visible';

  @HostBinding('class.' + AppearsOnScrollDirective.COMMON_CLASS)
  private readonly hostClassCommon: boolean = true;
  @HostBinding('class.' + AppearsOnScrollDirective.VISIBLE_CLASS)
  private hostClassVisible: boolean = true;

  private readonly subscription: Subscription = new Subscription();

  constructor(
    private readonly hostRef: ElementRef<HTMLElement>,
    private readonly documentScrollService: DocumentScrollService
  ) {}

  public ngOnInit(): void {
    const scrollActionDataSubscription = this.createScrollActionDataStream().subscribe(this.updateHostVisibility.bind(this));
    this.subscription.add(scrollActionDataSubscription);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private createScrollActionDataStream(): Observable<IScrollActionData> {
    return this.documentScrollService.onScroll$.pipe(
      throttleTime(AppearsOnScrollDirective.UPDATE_INTERVAL, asyncScheduler, { leading: true, trailing: true }),
      pairwise(),
      map(this.prepareScrollActionData.bind(this)),
      distinctUntilKeyChanged<IScrollActionData>('isHostVisible')
    );
  }

  private prepareScrollActionData([previousScroll, currentScroll]: PairedScrollEvents): IScrollActionData {
    if (this.isInitialHostArea(currentScroll.offset)) {
      return { isHostVisible: true };
    }
    return {
      isHostVisible: previousScroll.offset > currentScroll.offset
    }
  }

  private isInitialHostArea(scrollPosition: number): boolean {
    const initialAreaHeight: number = AppearsOnScrollDirective.ROOT_OFFSET + this.hostHeight;
    return initialAreaHeight > scrollPosition;
  }

  private get hostHeight(): number {
    return this.hostRef.nativeElement.offsetHeight;
  }

  private updateHostVisibility(scrollActionData: IScrollActionData): void {
    this.hostClassVisible = scrollActionData.isHostVisible;
  }
}
