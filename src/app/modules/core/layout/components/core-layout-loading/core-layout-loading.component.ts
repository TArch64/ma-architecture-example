import { Component } from '@angular/core';
import { LayoutLoadingService } from '../../services';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInAnimation, fadeOutAnimation } from '../../../shared';

@Component({
  selector: 'app-core-layout-loading',
  templateUrl: './core-layout-loading.component.html',
  styleUrls: ['./core-layout-loading.component.css'],
  animations: [
    trigger('inOutToolbarAction', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: { time: '200ms' }
        })
      ]),
      transition(':leave', [
        useAnimation(fadeOutAnimation, {
          params: { time: '150ms' }
        })
      ]),
    ]),
  ]
})
export class CoreLayoutLoadingComponent {
  public readonly isVisible$ = this.loadingService.isVisible$;

  constructor(private readonly loadingService: LayoutLoadingService) {}
}
