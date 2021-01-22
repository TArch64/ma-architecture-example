import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { adminRouting } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRouting),
  ]
})
export class AdminModule {}
