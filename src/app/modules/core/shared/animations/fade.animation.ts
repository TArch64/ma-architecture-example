import { animate, animation, style } from '@angular/animations';
import { MAT_TRANSITION } from './consts';

export const fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate(`{{ time }} ${MAT_TRANSITION}`, style({ opacity: '*' })),
]);

export const fadeOutAnimation = animation([
  style({ opacity: '*' }),
  animate(`{{ time }} ${MAT_TRANSITION}`, style({ opacity: 0 })),
]);

