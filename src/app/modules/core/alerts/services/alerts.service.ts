import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '../../shared';

@Injectable()
export class AlertsService {
  constructor(@Inject(WINDOW) private readonly window: Window) {}

  public show(text: string): void {
    this.window.alert(text);
  }
}
