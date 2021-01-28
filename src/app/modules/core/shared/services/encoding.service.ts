import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '../helpers';

@Injectable()
export class EncodingService {
  constructor(@Inject(WINDOW) private readonly window: Window) {}

  public encode(text: string): string {
    return this.window.btoa(text);
  }

  public decode(text: string): string {
    return this.window.atob(text);
  }
}
