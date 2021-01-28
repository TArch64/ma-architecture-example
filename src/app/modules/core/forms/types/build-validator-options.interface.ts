import { AbstractControl, ValidatorFn } from '@angular/forms';

export type BuildValidatorMessage = (control: AbstractControl) => string;

interface IBuildValidatorCommonOptions {
  validate: ValidatorFn;
}

export interface IBuildValidatorDynamicMessage {
  buildMessage: BuildValidatorMessage;
}

export interface IBuildValidatorStaticMessage {
  message: string;
}

export type IBuildValidatorOptions = IBuildValidatorCommonOptions & (IBuildValidatorDynamicMessage | IBuildValidatorStaticMessage);
