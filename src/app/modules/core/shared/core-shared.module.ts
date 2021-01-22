import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes';

const sharedPipes: Type<any>[] = [
  CapitalizePipe
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: sharedPipes,
  exports: sharedPipes
})
export class CoreSharedModule {}
