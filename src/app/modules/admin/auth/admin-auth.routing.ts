import { Routes } from '@angular/router';
import { AdminAuthLoginViewComponent } from './components';

export const adminAuthRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: AdminAuthLoginViewComponent
  }
];
