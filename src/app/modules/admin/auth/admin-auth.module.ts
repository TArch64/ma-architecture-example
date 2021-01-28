import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CoreFormsModule, CoreAlertsModule } from '../../core';
import { AdminSharedModule } from '../shared';
import { AdminAuthLoginFormComponent, AdminAuthLoginViewComponent } from './components';
import { adminAuthRouting } from './admin-auth.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminAuthRouting),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CoreFormsModule,
    CoreAlertsModule,
    AdminSharedModule
  ],
  declarations: [
    AdminAuthLoginViewComponent,
    AdminAuthLoginFormComponent
  ]
})
export class AdminAuthModule {}
