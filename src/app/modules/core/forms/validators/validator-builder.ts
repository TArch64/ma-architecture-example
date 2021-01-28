import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import {
  BuildValidatorMessage,
  IBuildValidatorDynamicMessage,
  IBuildValidatorOptions,
  IBuildValidatorStaticMessage
} from '../types';

export class ValidatorBuilder {
  private readonly validate: ValidatorFn;
  private readonly buildMessage: BuildValidatorMessage;

  public static build(options: IBuildValidatorOptions): ValidatorFn {
    return new ValidatorBuilder(options).build();
  }

  private constructor(options: IBuildValidatorOptions) {
    this.validate = options.validate;
    this.buildMessage = this.normalizeMessageBuilder(options);
  }

  private normalizeMessageBuilder(options: IBuildValidatorOptions): BuildValidatorMessage {
    const message = (options as IBuildValidatorStaticMessage).message;

    if (message) return () => message

    return (options as IBuildValidatorDynamicMessage).buildMessage;
  }

  private build(): ValidatorFn {
    return (control: AbstractControl) => {
      const validation = this.validate(control);
      if (!validation) return null;

      validation.messages = this.injectMessage(control, validation);
      return validation;
    }
  }

  private injectMessage(control: AbstractControl, validation: ValidationErrors): string[] {
    const messages: string[] = validation.messages || [];
    return messages.concat(this.buildMessage(control));
  }
}
