import { Component, Input } from '@angular/core';
import { BooleanInput } from 'ngx-boolean-input';
import { AdminAuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  @Input()
  @BooleanInput()
  private hideLogout: boolean;

  constructor(
    private readonly authService: AdminAuthService,
    private readonly router: Router
  ) {}

  public get isLogoutVisible(): boolean {
    return !this.hideLogout;
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/admin', 'auth']);
  }
}
