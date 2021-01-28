import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { adminRouting } from './admin.routing';
import { AdminAuthOnlyGuard, AdminSharedModule, AdminUnauthOnlyGuard } from './shared';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRouting),
    AdminSharedModule
  ],
  providers: [
    AdminAuthOnlyGuard,
    AdminUnauthOnlyGuard
  ]
})
export class AdminModule {}
