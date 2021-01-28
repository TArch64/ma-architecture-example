import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { requireEmail, requireField } from '../../../../core';
import { AuthCredentialsModel } from '../../../shared';

@Component({
  selector: 'app-admin-auth-login-form',
  templateUrl: './admin-auth-login-form.component.html',
  styleUrls: ['./admin-auth-login-form.component.css']
})
export class AdminAuthLoginFormComponent {
  public readonly loginForm: FormGroup = this.formBuilder.group({
    email: ['', [requireField, requireEmail]],
    password: ['', requireField]
  });
  @Output()
  public readonly onLogin = new EventEmitter<AuthCredentialsModel>();

  constructor(private readonly formBuilder: FormBuilder) {}

  public login(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    const credentials = AuthCredentialsModel.create({ email, password });
    this.onLogin.emit(credentials);
  }
}
