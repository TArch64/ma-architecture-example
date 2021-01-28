import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';
import { LayoutScrollService } from '../services';
import { distinctUntilKeyChanged, filter, map, pairwise, throttleTime } from 'rxjs/operators';
import { asyncScheduler, Observable } from 'rxjs';
import { LayoutScrollEvent } from '../models';
import { AutoUnsubscribe } from '../../shared';

type PairedScrollEvents = [LayoutScrollEvent, LayoutScrollEvent];
interface IScrollActionData {
  isHostVisible: boolean;
  ignore: boolean;
}

@Directive({
  selector: '[appAppearsOnScrollDirective]'
})
export class AppearsOnScrollDirective extends AutoUnsubscribe implements OnInit {
  @HostBinding('class.app-appears-on-scroll')
  private readonly hostClassCommon: boolean = true;
  @HostBinding('class.app-appears-on-scroll--visible')
  private hostClassVisible: boolean = true;

  constructor(
    private readonly hostRef: ElementRef<HTMLElement>,
    private readonly documentScrollService: LayoutScrollService
  ) {
    super();
  }

  public ngOnInit(): void {
    this.createScrollActionDataStream().pipe(this.takeUntilDestroyed).subscribe(this.updateHostVisibility.bind(this));
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
    if (this.isInitialHostArea(currentScroll.offsetTop)) {
      return { isHostVisible: true, ignore: false };
    }
    return {
      isHostVisible: previousScroll.offsetTop > currentScroll.offsetTop,
      ignore: Math.abs(previousScroll.offsetTop - currentScroll.offsetTop) < 50
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
