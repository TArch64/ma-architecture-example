import { inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export const WINDOW = new InjectionToken<Window>('window', {
  factory: () => inject(DOCUMENT).defaultView
});
