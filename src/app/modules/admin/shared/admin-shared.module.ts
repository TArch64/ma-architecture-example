import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreSharedModule, CoreLayoutModule } from '../../core';
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
