import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AdminAuthService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthOnlyGuard implements CanActivate {
  constructor(
    private readonly authService: AdminAuthService,
    private readonly router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.authService.isAuthenticated) return true;
    return this.router.createUrlTree(['/admin', 'auth']);
  }
}
