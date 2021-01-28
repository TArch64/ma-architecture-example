import { IAuthCredentialsOptions } from '../types';

export class AuthCredentialsModel {
  public static create(options: IAuthCredentialsOptions): AuthCredentialsModel {
    return new AuthCredentialsModel(options.email, options.password);
  }

  private constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  public isValid(assertion: IAuthCredentialsOptions): boolean {
    return assertion.email === this.email && assertion.password === this.password;
  }
}
