import { Directive, ElementRef, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { DocumentScrollService } from '../services';
import { distinctUntilKeyChanged, filter, map, pairwise, throttleTime } from 'rxjs/operators';
import { asyncScheduler, Observable, Subscription } from 'rxjs';
import { DocumentScrollEvent } from '../models';

type PairedScrollEvents = [DocumentScrollEvent, DocumentScrollEvent];
interface IScrollActionData {
  isHostVisible: boolean;
  ignore: boolean;
}

@Directive({
  selector: '[appAppearsOnScrollDirective]'
})
export class AppearsOnScrollDirective implements OnInit, OnDestroy {
  @HostBinding('class.app-appears-on-scroll')
  private readonly hostClassCommon: boolean = true;
  @HostBinding('class.app-appears-on-scroll--visible')
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
      throttleTime(250, asyncScheduler, { leading: true, trailing: true }),
      pairwise(),
      map(this.prepareScrollActionData.bind(this)),
      filter<IScrollActionData>(scrollActionData => !scrollActionData.ignore),
      distinctUntilKeyChanged<IScrollActionData>('isHostVisible')
    );
  }

  private prepareScrollActionData([previousScroll, currentScroll]: PairedScrollEvents): IScrollActionData {
    if (this.isInitialHostArea(currentScroll.offset)) {
      return { isHostVisible: true, ignore: false };
    }
    return {
      isHostVisible: previousScroll.offset > currentScroll.offset,
      ignore: Math.abs(previousScroll.offset - currentScroll.offset) < 50
    };
  }

  private isInitialHostArea(scrollPosition: number): boolean {
    const initialAreaHeight: number = 50 + this.hostHeight;
    return initialAreaHeight > scrollPosition;
  }

  private get hostHeight(): number {
    return this.hostRef.nativeElement.offsetHeight;
  }

  private updateHostVisibility(scrollActionData: IScrollActionData): void {
    this.hostClassVisible = scrollActionData.isHostVisible;
  }
}
