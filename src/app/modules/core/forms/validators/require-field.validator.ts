import { ValidatorBuilder } from './validator-builder';
import { Validators } from '@angular/forms';

export const requireField = ValidatorBuilder.build({
  validate: Validators.required,
  message: 'This field is required'
});
