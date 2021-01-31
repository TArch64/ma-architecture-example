import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindFormControlErrorDirective, BindFormErrorsDirective } from './directives';
import { ReactiveFormsModule } from '@angular/forms';
import { TextEditorComponent } from './components';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

const sharedDeclarations: Type<any>[] = [
  BindFormErrorsDirective,
  BindFormControlErrorDirective,
  TextEditorComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: sharedDeclarations,
  exports: [
    ...sharedDeclarations,
    ReactiveFormsModule
  ]
})
export class CoreFormsModule {}
