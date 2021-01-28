import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindFormControlErrorDirective, BindFormErrorsDirective } from './directives';
import { ReactiveFormsModule } from '@angular/forms';

const sharedDirectives: Type<any>[] = [
  BindFormErrorsDirective,
  BindFormControlErrorDirective
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: sharedDirectives,
  exports: [
    ...sharedDirectives,
    ReactiveFormsModule
  ]
})
export class CoreFormsModule {}
