import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreLayoutModule } from '../../core/layout';
import { AdminLayoutComponent } from './components';

const sharedComponents: Type<any>[] = [
  AdminLayoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    CoreLayoutModule
  ],
  declarations: sharedComponents,
  exports: sharedComponents
})
export class AdminSharedModule {}
