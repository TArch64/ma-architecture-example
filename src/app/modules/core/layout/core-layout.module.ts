import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreLayoutComponent } from './components';

const sharedComponents: Type<any>[] = [
  CoreLayoutComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoreLayoutComponent
  ],
  exports: [
    CoreLayoutComponent
  ]
})
export class CoreLayoutModule {}
