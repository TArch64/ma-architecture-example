import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreSharedModule, CoreLayoutModule } from '../../core';
import { AdminLayoutComponent } from './components';
import { AdminAuthService } from './services';

const sharedDeclarations: Type<any>[] = [
  AdminLayoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreSharedModule,
    CoreLayoutModule
  ],
  declarations: sharedDeclarations,
  providers: [
    AdminAuthService
  ],
  exports: sharedDeclarations
})
export class AdminSharedModule {}
