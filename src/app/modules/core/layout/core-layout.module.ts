import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreLayoutComponent, CoreLayoutHeaderActionComponent, CoreLayoutHeaderWrapperComponent } from './components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppearsOnScrollDirective } from './directives';
import { DocumentScrollService } from './services';
import { CoreSharedModule } from '../shared';

const sharedComponents: Type<any>[] = [
  CoreLayoutComponent,
  CoreLayoutHeaderActionComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CoreSharedModule
  ],
  declarations: [
    ...sharedComponents,
    CoreLayoutHeaderWrapperComponent,
    AppearsOnScrollDirective
  ],
  providers: [
    DocumentScrollService
  ],
  exports: sharedComponents
})
export class CoreLayoutModule {}
