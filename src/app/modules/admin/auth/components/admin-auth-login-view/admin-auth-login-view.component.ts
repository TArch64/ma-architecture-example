import { Component } from '@angular/core';
import { AdminAuthService, AuthCredentialsModel } from '../../../shared';
import { AlertsService } from '../../../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth-login-view',
  templateUrl: './admin-auth-login-view.component.html',
  styleUrls: ['./admin-auth-login-view.component.css']
})
export class AdminAuthLoginViewComponent {
  constructor(
    private readonly authService: AdminAuthService,
    private readonly alertsService: AlertsService,
    private readonly router: Router
  ) {}

  public login(credentials: AuthCredentialsModel): void {
    this.authService.login(credentials).subscribe({
      next: this.onLogined.bind(this),
      error: this.onLoginFailed.bind(this)
    });
  }

  private onLogined(): void {
    this.router.navigate(['/admin']);
  }

  private onLoginFailed(error: Error): void {
    this.alertsService.show(error.message);
  }
}
