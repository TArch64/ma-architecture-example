import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreSharedModule } from '../../core/shared';
import { CoreLayoutModule } from '../../core/layout';
import { AdminLayoutComponent } from './components';
import { AdminAuthService } from './services';

const sharedComponents: Type<any>[] = [
  AdminLayoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreSharedModule,
    CoreLayoutModule
  ],
  declarations: sharedComponents,
  providers: [
    AdminAuthService
  ],
  exports: sharedComponents
})
export class AdminSharedModule {}
