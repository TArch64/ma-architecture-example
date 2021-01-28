import { ValidatorBuilder } from './validator-builder';
import { Validators } from '@angular/forms';

export const requireEmail = ValidatorBuilder.build({
  validate: Validators.email,
  message: 'Incorrect email format'
});
