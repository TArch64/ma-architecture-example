import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreLayoutComponent } from './components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AppearsOnScrollDirective } from './directives';
import { DocumentScrollService } from './services';

const sharedComponents: Type<any>[] = [
  CoreLayoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule
  ],
  declarations: [
    ...sharedComponents,
    AppearsOnScrollDirective
  ],
  providers: [
    DocumentScrollService
  ],
  exports: sharedComponents
})
export class CoreLayoutModule {}
