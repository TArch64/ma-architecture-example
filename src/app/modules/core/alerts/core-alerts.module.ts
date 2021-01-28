import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AlertsService
  ]
})
export class CoreAlertsModule {}
