import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { adminAuthRouting } from './admin-auth.routing';
import { AdminSharedModule } from '../shared';
import { AdminAuthLoginViewComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminAuthRouting),
    AdminSharedModule
  ],
  declarations: [
    AdminAuthLoginViewComponent
  ]
})
export class AdminAuthModule {}
